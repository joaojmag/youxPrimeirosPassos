package com.jmag.casa_de_apostas.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity(name = "tb_jogo")
@Table(name = "tb_jogo")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Jogo {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String vetorComJogo;
    private Double valorDaAposta;
    private Integer idDoUsuario;
    private Boolean vitoria;
    private Double valorGanho;
    private Integer numeroDiamantes;
    private LocalDate dataJogo;

    public Jogo(String vetorComJogo, Double valorDaAposta, Integer idDoUsuario) {
        this.vetorComJogo = vetorComJogo;
        this.valorDaAposta = valorDaAposta;
        this.idDoUsuario = idDoUsuario;
    }
}
