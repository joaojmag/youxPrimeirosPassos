package aula41_54;

import java.util.Scanner;

public class faz_depois_perguntaDoWhile {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        char sn;
        do {
            System.out.print("Digite a temperatura em Celsius: ");
            double c = sc.nextDouble();
            double f = (9.0 * c) / 5.0 + 32.0;
            System.out.printf("Equivalente em Fahrenheit: %.1f%n", f);
            System.out.print("Deseja continuar (s/n)? ");
            sn = sc.next().charAt(0);
        } while (sn != 'n');

        sc.close();
    }
}