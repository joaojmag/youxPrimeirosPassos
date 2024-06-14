package aula237_250_GenericsSetMap.Map.ExercicioProposto;

import java.util.Objects;

public class Urna {

    private String nome;
    private Integer numVotos;

    public Urna(String nome, Integer numVotos) {
        this.nome = nome;
        this.numVotos = numVotos;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Integer getNumVotos() {
        return numVotos;
    }

    public void setNumVotos(Integer numVotos) {
        this.numVotos = numVotos;
    }


}