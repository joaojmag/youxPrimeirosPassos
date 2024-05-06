package aula1_23;

import java.util.Scanner;

public class entrada_de_dados {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Uma palavra
        String x;
        System.out.println("Digite uma String: ");
        x = sc.next();
        System.out.println("O que você digitou: " + x);

        // Um número int
        int y;
        System.out.println("Digite um Int: ");
        y = sc.nextInt();
        System.out.println("O que você digitou: " + y);

        // Um número double
        double z;
        System.out.println("Digite um Double: ");
        z = sc.nextDouble();
        System.out.println("O que você digitou: " + z);

        // Um número char
        char i;
        System.out.println("Digite um Char: ");
        i = sc.next().charAt(0);
        System.out.println("O que você digitou: " + i);

        String qw;
        int as;
        double zx;
        qw = sc.next();
        as = sc.nextInt();
        zx = sc.nextDouble();

        System.out.println(qw);
        System.out.println(as);
        System.out.println(zx);

        sc.close();
    }
}