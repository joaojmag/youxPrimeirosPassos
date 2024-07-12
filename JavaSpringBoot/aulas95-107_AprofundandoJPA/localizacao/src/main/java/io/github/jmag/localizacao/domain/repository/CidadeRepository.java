package io.github.jmag.localizacao.domain.repository;

import io.github.jmag.localizacao.domain.entity.Cidade;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CidadeRepository extends JpaRepository<Cidade, Long> {
    // buscar pelo nome
    List<Cidade> findByNome(String nome);

    // buscar usandoo like ordenado
    @Query(" select c from Cidade c where upper(c.nome) like upper(?1) ")
    List<Cidade> findByNomeLike(String nome, Sort habitantes);

    // buscar usandoo like paginado
    @Query(" select c from Cidade c where upper(c.nome) like upper(?1) ")
    List<Cidade> findByNomeLike(String nome, Pageable pageable);

    // buscar pelo inicio do nome
    List<Cidade> findByNomeStartingWith(String nome);

    // busca pelo fim do nome
    List<Cidade> findByNomeEndingWith(String nome);

    // busca por algum pedaço do nome
    List<Cidade> findByNomeContaining(String nome);

    // busca pelo numero de habitantes
    List<Cidade> findByHabitantes(Long habitantes);

    // busca menores que
    List<Cidade> findByHabitantesLessThan(Long habitantes);

    // busca menores ou igual que
    List<Cidade> findByHabitantesLessThanEqual(Long habitantes);

    // busca maiores que
    List<Cidade> findByHabitantesGreaterThan(Long habitantes);

    // busca maiores que
    List<Cidade> findByHabitantesLessThanAndNomeLike(Long habitantes, String nome);


}
