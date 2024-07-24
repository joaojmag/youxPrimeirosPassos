package com.jmag.casa_de_apostas.services;

import com.jmag.casa_de_apostas.entities.Jogo;
import com.jmag.casa_de_apostas.entities.dto.IniciarPartidaDTO;
import com.jmag.casa_de_apostas.entities.dto.JogandoDTO;
import com.jmag.casa_de_apostas.repositories.JogoRepository;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service
public class JogoService {

    @Autowired
    private JogoRepository repository;

    private final List<Integer> listaAleatoria = new ArrayList<>();
    @Getter
    @Setter
    private int quantidade_de_diamantes;

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

        if (vet[posicaoNumClicado] == 1) {
            setQuantidade_de_diamantes(getQuantidade_de_diamantes() + 1);
            if (dadosJogo.encerrar()) {
                return calculoDeGanhos(dadosJogo.idDoJogo(), getQuantidade_de_diamantes());
            }
            return (double) getQuantidade_de_diamantes();

        } else {
            setQuantidade_de_diamantes(0);
            return 0.0;
        }
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
