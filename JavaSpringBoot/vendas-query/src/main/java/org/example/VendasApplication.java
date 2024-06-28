package org.example;


import org.example.domain.entity.Cliente;
import org.example.domain.repositorio.Clientes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.List;

@SpringBootApplication
public class VendasApplication {

    @Bean
    public CommandLineRunner init(@Autowired Clientes clientes) {
        return args -> {
            System.out.println("Salvando Clientes");
            clientes.save(new Cliente("Douglas"));
            clientes.save(new Cliente("Outro Cliente"));

            // verificar se existe
            boolean existe = clientes.existsByNome("Douglas") ;
            System.out.println("Existe um cliente com o nome Douglas? " + (existe ? "Sim" : "Não"));


            List<Cliente> todosClientes = clientes.findAll();
            todosClientes.forEach(System.out::println);

            System.out.println("Atualizando Clientes");
            todosClientes.forEach(c -> {
                c.setNome(c.getNome() + " atualizado.");
                clientes.save(c);
            });

            todosClientes = clientes.findAll();
            todosClientes.forEach(System.out::println);


            System.out.println("Buscando Clientes");
            clientes.findByNomeLike("Cli").forEach(System.out::println);

//             Deleta os clientes
            System.out.println("Deletando Clientes");
            clientes.findAll().forEach(p -> clientes.delete(p));

            todosClientes = clientes.findAll();
            if (todosClientes.isEmpty()) {
                System.out.println("Não Há clientes");
            } else {
                todosClientes.forEach(System.out::println);
            }
        };
    }

    public static void main(String[] args) {
        SpringApplication.run(VendasApplication.class, args);
    }
}