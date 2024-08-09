package com.jmag.casa_de_apostas.repositories;

import com.jmag.casa_de_apostas.entities.Jogo;
import com.jmag.casa_de_apostas.entities.dto.VitoriasEvaloresDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface JogoRepository extends JpaRepository<Jogo, Integer> {

    @Query(value = "SELECT * FROM tb_jogo WHERE id_do_usuario = :idDoUsuario LIMIT :limit OFFSET :offset", nativeQuery = true)
    List<Jogo> paginacao(@Param("idDoUsuario") Integer idDoUsuario, @Param("limit") int limit, @Param("offset") int offset);

    @Query(value = "select count(*) from tb_jogo WHERE id_do_usuario = :idDoUsuario", nativeQuery = true)
    Integer totalDeJogos(@Param("idDoUsuario") Integer idDoUsuario);

    //   @Query(value = "SELECT vitoria, valor_ganho as valorganho FROM tb_jogo WHERE id_do_usuario = :idDoUsuario AND vitoria = true", nativeQuery = true)
    @Query(value = "SELECT count(vitoria), sum(valor_ganho),vitoria  FROM tb_jogo WHERE id_do_usuario = :idDoUsuario group by vitoria", nativeQuery = true)
    List<VitoriasEvaloresDTO> vitoriasEvalores(@Param("idDoUsuario") Integer idDoUsuario);

}
