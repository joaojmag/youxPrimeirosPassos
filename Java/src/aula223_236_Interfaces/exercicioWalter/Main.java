package aula223_236_Interfaces.exercicioWalter;


public class Main {

    private Pagamento pagamento;

    public Main(Pagamento pagamento) {
        this.pagamento = pagamento;
    }

    public Pagamento getPagamento() {
        return pagamento;
    }

    public void setPagamento(Pagamento pagamento) {
        this.pagamento = pagamento;
    }
}