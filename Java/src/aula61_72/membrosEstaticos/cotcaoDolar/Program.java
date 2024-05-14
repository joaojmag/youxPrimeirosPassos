package cotcaoDolar;

import java.util.Locale;
import java.util.Scanner;

import cotcaoDolar.CurrencyConverter;

public class Program {
    public static void main(String[] args) {

        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        System.out.print("What is the dollar price? ");
        double cotacao = sc.nextDouble();
        System.out.print("How many dollars will be bought? ");
        double valor = sc.nextDouble();
        System.out.printf("Amount to be paid in reais = %.2f", CurrencyConverter.conversao(cotacao, valor));


    }
}