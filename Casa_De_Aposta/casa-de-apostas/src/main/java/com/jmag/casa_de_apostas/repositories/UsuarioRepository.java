package com.jmag.casa_de_apostas.repositories;

import com.jmag.casa_de_apostas.entities.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
}
