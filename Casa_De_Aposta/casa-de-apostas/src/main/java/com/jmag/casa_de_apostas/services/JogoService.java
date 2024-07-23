package com.jmag.casa_de_apostas.services;

import com.jmag.casa_de_apostas.entities.dto.JogandoDTO;
import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Service
public class JogoService {

    private final List<Integer> listaAleatoria = new ArrayList<>();
    @Getter
    @Setter
    private int quantidade_de_diamantes;

    Random random = new Random();

    public List<Integer> gerarListaAleatorio() {
        for (int i = 0; i < 25; i++) {
            listaAleatoria.add(random.nextInt(2));
        }
        return listaAleatoria;
    }

    public Double jogando(JogandoDTO dadosJogo) {



        if (dadosJogo.num() == 1) {
            setQuantidade_de_diamantes(getQuantidade_de_diamantes() + 1);
            if (dadosJogo.encerrar() != null) {
                return calculoDeGanhos(dadosJogo.valor_apostado(), getQuantidade_de_diamantes());
            }
            return (double) getQuantidade_de_diamantes();
        } else {
            setQuantidade_de_diamantes(0);
            return 0.0;
        }



    }


    public Double calculoDeGanhos(Double valor_apostado, Integer quantidade_de_diamantes_encontrados) {
        return (valor_apostado) * (1 + (quantidade_de_diamantes_encontrados * 0.33));
    }
}
