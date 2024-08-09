package com.jmag.casa_de_apostas.services;

import com.jmag.casa_de_apostas.entities.Jogo;
import com.jmag.casa_de_apostas.entities.Usuario;
import com.jmag.casa_de_apostas.entities.dto.IniciarPartidaDTO;
import com.jmag.casa_de_apostas.entities.dto.InputPaginacaoDTO;
import com.jmag.casa_de_apostas.entities.dto.JogandoDTO;
import com.jmag.casa_de_apostas.entities.dto.PaginacaoDTO;
import com.jmag.casa_de_apostas.repositories.JogoRepository;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service
public class JogoService {

    @Autowired
    private JogoRepository repository;

//    @Autowired
//    private DashUsuarioRepository dashUsuarioRepository;

    private final List<Integer> listaAleatoria = new ArrayList<>();
    @Getter
    @Setter
    private int quantidade_de_diamantes;
    @Getter
    @Setter
    private boolean acertouOuNao;
    Random random = new Random();

    public Integer iniciarPartida(IniciarPartidaDTO iniciar) {

        if (iniciar.iniciar()) {
            String vetorComJogo = gerarListaAleatorio().toString();
            Double valorDaAposta = iniciar.valorDaAposta();
            Integer idDoUsuario = iniciar.idDoUsuario();
            var jogo = repository.save(new Jogo(vetorComJogo, valorDaAposta, idDoUsuario));

            return jogo.getId();
        }
        return null;
    }

    public Double jogando(JogandoDTO dadosJogo) {

        int posicaoNumClicado = dadosJogo.posicaoNumClicado();
        Optional<Jogo> dadosDoJogo = repository.findById(dadosJogo.idDoJogo());
        Integer[] vet = vetorComAsPosicoesDoJogo(dadosDoJogo);

        if (posicaoNumClicado == 25) {
            setAcertouOuNao(true);
        } else {
            setAcertouOuNao(vet[posicaoNumClicado] == 1);
        }

        if (acertouOuNao) {
            if (posicaoNumClicado != 25)
                setQuantidade_de_diamantes(getQuantidade_de_diamantes() + 1);

            if (dadosJogo.encerrar()) {
                int Quantidade_de_diamantes = getQuantidade_de_diamantes();
                setQuantidade_de_diamantes(0);
                double valorGanho = calculoDeGanhos(dadosJogo.idDoJogo(), Quantidade_de_diamantes);
                // Atualiza o status de vitoria e de ganho de capital
                dadosDoJogo.get().setVitoria(true);
                dadosDoJogo.get().setValorGanho(valorGanho);
                dadosDoJogo.get().setDataJogo(LocalDate.now());
                dadosDoJogo.get().setNumeroDiamantes(Quantidade_de_diamantes);
                repository.save(dadosDoJogo.get());
                return valorGanho;
            }
            return 1.0;//(double) getQuantidade_de_diamantes();

        } else {
            setQuantidade_de_diamantes(0);

            // Atualiza o status de vitoria e de ganho de capital
            dadosDoJogo.get().setVitoria(false);
            dadosDoJogo.get().setValorGanho(0.0);
            dadosDoJogo.get().setDataJogo(LocalDate.now());
            dadosDoJogo.get().setNumeroDiamantes(getQuantidade_de_diamantes());
            repository.save(dadosDoJogo.get());

            return 0.0;
        }
    }

    public List<Jogo> findAll() {
        return repository.findAll();
    }

    public PaginacaoDTO paginacao(InputPaginacaoDTO dto) {
        return new PaginacaoDTO(
                repository.paginacao(dto.id(), 5, (dto.numeroDaPagina() - 1) * 5),
//                (int) Math.ceil((double) repository.totalDeJogos(dto.id()) / 5)
                repository.totalDeJogos(dto.id()),
                repository.vitoriasEvalores(dto.id())
        );
    }

    private Integer[] vetorComAsPosicoesDoJogo(Optional<Jogo> dadosDoJogo) {
        Jogo jogo = dadosDoJogo.get();
        String vetorComJogo = jogo.getVetorComJogo();
        vetorComJogo = vetorComJogo.replace("[", "").replace("]", "").trim();
        String[] novoVet = vetorComJogo.split(",");
        Integer[] vetor = new Integer[novoVet.length];

        for (int i = 0; i < novoVet.length; i++) {
            vetor[i] = Integer.parseInt(novoVet[i].trim());
        }
        return vetor;
    }

    private Double calculoDeGanhos(Integer idJogo, Integer quantidade_de_diamantes_encontrados) {
        Jogo jogo = repository.findById(idJogo).get();
        Double valor_apostado = jogo.getValorDaAposta();
        return (valor_apostado) * (1 + (quantidade_de_diamantes_encontrados * 0.33));
    }

    private List<Integer> gerarListaAleatorio() {
        listaAleatoria.clear();
        for (int i = 0; i < 25; i++) {
            listaAleatoria.add(random.nextInt(2));
        }
        return listaAleatoria;
    }
}
