package aula154_166.exercicioAbstrato;

public class Pfisica extends Pessoa {
    private Double gastos_saude;

    public Pfisica() {
        super();
    }

    public Pfisica(String nome, Double renda_anual, Double gastos_saude) {
        super(nome, renda_anual);
        this.gastos_saude = gastos_saude;
    }

    public Double getGastos_saude() {
        return gastos_saude;
    }

    public void setGastos_saude(Double gastos_saude) {
        this.gastos_saude = gastos_saude;
    }

    @Override
    public Double imposto() {
        return ((super.getRenda_anual() <= 20000 ? super.getRenda_anual() * 1.15 : super.getRenda_anual() * 1.25) - gastos_saude * 0.5);
    }

}