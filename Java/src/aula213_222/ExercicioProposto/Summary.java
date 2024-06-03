package aula213_222.ExercicioProposto;

import java.util.Locale;

public class Summary {
    private String nome;
    private Double preco;
    private Integer quantidade;

    public Summary() {
    }

    public Summary(String nome, Double preco, Integer quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Double getPreco() {
        return preco;
    }

    public void setPreco(Double preco) {
        this.preco = preco;
    }

    public Integer getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(Integer quantidade) {
        this.quantidade = quantidade;
    }

    public Double valorTotal() {
        return preco * quantidade;
    }

    @Override
    public String toString() {
        return String.format("%s, %.2f", nome, valorTotal());
    }

}