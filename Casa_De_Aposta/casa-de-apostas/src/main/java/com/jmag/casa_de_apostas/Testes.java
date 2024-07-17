package com.jmag.casa_de_apostas;

import com.jmag.casa_de_apostas.entities.Usuario;
import com.jmag.casa_de_apostas.repositories.UsuarioRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

@Configuration
@Profile("parado")
public class Testes implements CommandLineRunner {


    private UsuarioRepository usuarioResource;

    @Override
    public void run(String... args) throws Exception {
        Usuario u1 = new Usuario(null, "Joao", "joao@gmail.com", "12/02/2036", "147852", true);

        usuarioResource.save(u1);
    }
}
