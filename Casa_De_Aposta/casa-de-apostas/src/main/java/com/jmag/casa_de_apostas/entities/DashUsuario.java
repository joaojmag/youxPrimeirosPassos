package com.jmag.casa_de_apostas.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity(name = "tb_dashusuario")
@Table(name = "tb_tb_dashusuario")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DashUsuario {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private Integer partidasPerdidas;
    private Integer partidasGanhas;
    private Double valores;
}
