package io.github.jmag.localizacao;

import io.github.jmag.localizacao.domain.entity.Cidade;
import io.github.jmag.localizacao.service.CidadeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class LocalizacaoApplication implements CommandLineRunner {

    @Autowired
    private CidadeService cidadeService;

    @Override
    public void run(String... args) throws Exception {
//        salvarCidade();
//        listarCidades();
//        cidadeService.listarPorNome();
//        cidadeService.listarPorNumeroHabtantes();
        var cidade = new Cidade(null, "Porto Alegre", null);
        cidadeService.filtroDinamico(cidade).forEach(System.out::println);
    }

    public static void main(String[] args) {
        SpringApplication.run(LocalizacaoApplication.class, args);
    }
}
