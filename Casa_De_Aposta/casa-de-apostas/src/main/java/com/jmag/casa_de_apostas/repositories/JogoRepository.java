package com.jmag.casa_de_apostas.repositories;

import com.jmag.casa_de_apostas.entities.Jogo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface JogoRepository extends JpaRepository<Jogo, Integer> {

    @Query(value = "SELECT * FROM tb_jogo WHERE id_do_usuario = :idDoUsuario LIMIT :limit OFFSET :offset", nativeQuery = true)
    List<Jogo> paginacao(@Param("idDoUsuario") Integer idDoUsuario, @Param("limit") int limit, @Param("offset") int offset);

    @Query(value = "select count(*) from tb_jogo WHERE id_do_usuario = :idDoUsuario", nativeQuery = true)
    Integer totalDeJogos(@Param("idDoUsuario") Integer idDoUsuario);
}
