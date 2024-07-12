package io.github.jmag.localizacao.service;

import io.github.jmag.localizacao.domain.entity.Cidade;
import io.github.jmag.localizacao.domain.repository.CidadeRepository;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class CidadeService {

    private CidadeRepository repository;

    public CidadeService(CidadeRepository repository) {
        this.repository = repository;
    }

    // Para fazer a ingeção na mão
    @Transactional
    public void salvarCidade() {
        var cidade = new Cidade(1L, "São Paulo", 12396372L);
        repository.save(cidade);
    }

    // testando as queres
    public void listarCidades() {
        repository.findAll().forEach(System.out::println);
    }

    public void listarPorNome() {
//        cidadeRepository.findByNome("BH").forEach(System.out::println);
//        cidadeRepository.findByNomeStartingWith("Porto").forEach(System.out::println);
//        cidadeRepository.findByNomeEndingWith("a").forEach(System.out::println);
//        cidadeRepository.findByNomeContaining("si").forEach(System.out::println);
//        repository.findByNomeLike("P%", Sort.by("habitantes")).forEach(System.out::println);
        Pageable pageable = PageRequest.of(0,10);
        repository.findByNomeLike("%%", pageable)
                .forEach(System.out::println);
    }

    public void listarPorNumeroHabtantes() {
//        cidadeRepository.findByHabitantes(369852L).forEach(System.out::println);
//        cidadeRepository.findByHabitantesGreaterThan(369852L).forEach(System.out::println);
//        cidadeRepository.findByHabitantesLessThanEqual(369852L).forEach(System.out::println);
        repository.findByHabitantesLessThanAndNomeLike(369800L, "%a%").forEach(System.out::println);
    }

    public List<Cidade> filtroDinamico(Cidade cidade){
        return repository.findByHabitantesLessThanAndNomeLike(cidade.getHabitantes(), cidade.getNome());
    }

}
