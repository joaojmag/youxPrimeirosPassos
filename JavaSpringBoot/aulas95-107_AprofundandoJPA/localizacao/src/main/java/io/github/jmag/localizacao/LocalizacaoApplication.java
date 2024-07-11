package io.github.jmag.localizacao;

import io.github.jmag.localizacao.domain.entity.Cidade;
import io.github.jmag.localizacao.domain.repository.CidadeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.transaction.annotation.Transactional;

@SpringBootApplication
public class LocalizacaoApplication implements CommandLineRunner {

    @Autowired
    private CidadeRepository cidadeRepository;

    @Override
    public void run(String... args) throws Exception {
//        salvarCidade();
//        listarCidades();
//        listarPorNome();
        listarPorNumeroHabtantes();
    }

    @Transactional
    void salvarCidade() {
        var cidade = new Cidade(1L, "São Paulo", 12396372L);
        cidadeRepository.save(cidade);
    }

    // testando as queres
    void listarCidades() {
        cidadeRepository.findAll().forEach(System.out::println);
    }

    void listarPorNome() {
//        cidadeRepository.findByNome("BH").forEach(System.out::println);
//        cidadeRepository.findByNomeStartingWith("Porto").forEach(System.out::println);
//        cidadeRepository.findByNomeEndingWith("a").forEach(System.out::println);
//        cidadeRepository.findByNomeContaining("si").forEach(System.out::println);
        cidadeRepository.findByNomeLike("%P%").forEach(System.out::println);
    }

    void listarPorNumeroHabtantes() {
//        cidadeRepository.findByHabitantes(369852L).forEach(System.out::println);
//        cidadeRepository.findByHabitantesGreaterThan(369852L).forEach(System.out::println);
//        cidadeRepository.findByHabitantesLessThanEqual(369852L).forEach(System.out::println);
        cidadeRepository.findByHabitantesLessThanAndNomeLike(369800L, "%a%").forEach(System.out::println);
    }

    public static void main(String[] args) {
        SpringApplication.run(LocalizacaoApplication.class, args);
    }
}
