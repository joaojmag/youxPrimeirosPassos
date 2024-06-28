package org.example.domain.repositorio;

import org.example.domain.entity.Cliente;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface Clientes extends JpaRepository<Cliente, Integer> {
    // filtra por nome e por pedaços do nome
    List<Cliente> findByNomeLike(String nome);

    // filtrar por nome ou id
    List<Cliente> findByNomeOrIdOrderById(String nome, Integer id);

    // filtrar por nome
    Cliente findOneByNome(String nome);

    // verificar se existe
    boolean existsByNome(String nome);
}