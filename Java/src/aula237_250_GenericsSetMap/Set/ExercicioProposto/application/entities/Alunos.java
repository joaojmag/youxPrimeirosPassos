package aula237_250_GenericsSetMap.Set.ExercicioProposto.application.entities;

import java.util.Objects;

public class Alunos {
    private Integer numeroMatrucula;

    public Alunos(Integer numeroMatrucula) {
        this.numeroMatrucula = numeroMatrucula;
    }

    public Integer getNumeroMatrucula() {
        return numeroMatrucula;
    }

    public void setNumeroMatrucula(Integer numeroMatrucula) {
        this.numeroMatrucula = numeroMatrucula;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Alunos alunos = (Alunos) o;
        return Objects.equals(numeroMatrucula, alunos.numeroMatrucula);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(numeroMatrucula);
    }
}
