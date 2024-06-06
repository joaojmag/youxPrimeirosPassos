package aula223_236_Interfaces.exercicioWalter;

public class MercadoLivre implements Pagamento {
    @Override
    public Double calcJuros(Double valor) {
        return valor * 1.2;
    }
}