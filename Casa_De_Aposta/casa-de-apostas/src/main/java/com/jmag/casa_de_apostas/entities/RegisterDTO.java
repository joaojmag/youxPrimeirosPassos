package com.jmag.casa_de_apostas.entities;

public record RegisterDTO(String nome, String email, String dataNascimento, String senha, UsuarioRole role) {
}
