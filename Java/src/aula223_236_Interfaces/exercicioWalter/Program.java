package aula223_236_Interfaces.exercicioWalter;

import java.util.Scanner;

public class Program {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        Main payPal = new Main(new PayPal());
        Main mercadoLivre = new Main(new MercadoLivre());

        System.out.print("Valor da compra Mercado Livre: ");
        double valorM = sc.nextDouble();

        System.out.print("Valor da compra PayPal: ");
        double valorP = sc.nextDouble();

        System.out.println("Preço final Mercado Livre R$ " + mercadoLivre.getPagamento().calcJuros(valorM));
        System.out.println("Preço final PayPal R$ " + payPal.getPagamento().calcJuros(valorP));

        sc.close();
    }
}