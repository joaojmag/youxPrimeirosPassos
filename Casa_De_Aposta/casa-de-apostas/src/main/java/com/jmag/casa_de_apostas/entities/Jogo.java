package com.jmag.casa_de_apostas.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity(name = "tb_jogo")
@Table(name = "tb_jogo")
@NoArgsConstructor
@AllArgsConstructor
public class Jogo {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String vetorComJogo;
    private Integer idDoUsuario;

}
