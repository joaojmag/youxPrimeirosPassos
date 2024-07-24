package com.jmag.casa_de_apostas.repositories;

import com.jmag.casa_de_apostas.entities.Jogo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JogoRepository extends JpaRepository<Jogo, Integer> {
}
