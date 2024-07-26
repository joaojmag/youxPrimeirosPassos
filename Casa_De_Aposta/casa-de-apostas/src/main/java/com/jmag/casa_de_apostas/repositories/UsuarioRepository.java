package com.jmag.casa_de_apostas.repositories;

import com.jmag.casa_de_apostas.entities.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

    UserDetails findByEmail(String email);

    Optional<Usuario> findByEmailParaBloqueio(String emailParaBloqueio);
}
