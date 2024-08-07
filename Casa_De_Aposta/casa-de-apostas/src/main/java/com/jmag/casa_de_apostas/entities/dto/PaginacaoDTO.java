package com.jmag.casa_de_apostas.entities.dto;

import com.jmag.casa_de_apostas.entities.Jogo;

import java.util.List;

public record PaginacaoDTO(List<Jogo> jogos, Integer totalPaginas) {
}
