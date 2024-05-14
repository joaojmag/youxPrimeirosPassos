package cotcaoDolar;

public class CurrencyConverter {
    public static final double IOF = 0.06;

    public static double conversao(double cotacao, double valor) {
        return valor * cotacao * (1 + IOF);
    }
}