package com.jmag.casa_de_apostas.entities.dto;

import com.jmag.casa_de_apostas.entities.UsuarioRole;

public record RegisterDTO(String nome, String email, String dataNascimento, String senha, UsuarioRole role) {
}
