package aula223_236_Interfaces.exercicioWalter;

public class PayPal implements Pagamento {
    @Override
    public Double calcJuros(Double valor) {
        return valor * 1.3;
    }
}