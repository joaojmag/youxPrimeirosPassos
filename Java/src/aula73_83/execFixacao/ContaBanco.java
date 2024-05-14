package execFixacao;

public class ContaBanco {

    private int numero;
    private String nome;
    private double valor;

    public ContaBanco(int numero, String nome) {
        this.numero = numero;
        this.nome = nome;
    }

    public ContaBanco(int numero, String nome, double valor) {
        this.numero = numero;
        this.nome = nome;
        deposito(valor);
    }

    public int getNumero() {
        return numero;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public double getValor() {
        return this.valor;
    }

    public void deposito(double valor) {
        this.valor += valor;
    }

    public void retirada(double valor) {
        this.valor -= valor + 5.0;
    }

    public String toString() {
        return String.format("Account %d, Holder: %s, Balance: $ %.2f", numero, nome, valor);
    }

}