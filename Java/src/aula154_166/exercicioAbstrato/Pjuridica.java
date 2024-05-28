package aula154_166.exercicioAbstrato;

public class Pjuridica extends Pessoa {
    private Integer numero_funcionarios;

    public Pjuridica() {
        super();
    }

    public Pjuridica(String nome, Double renda_anual, Integer numero_funcionarios) {
        super(nome, renda_anual);
        this.numero_funcionarios = numero_funcionarios;
    }

    public Integer getNumero_funcionarios() {
        return numero_funcionarios;
    }

    public void setNumero_funcionarios(Integer numero_funcionarios) {
        this.numero_funcionarios = numero_funcionarios;
    }

    @Override
    public Double imposto() {
        return numero_funcionarios <= 10 ? getRenda_anual() * 1.16 : getRenda_anual() * 1.14;
    }
}