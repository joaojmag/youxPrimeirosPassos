package aula1_29;

import java.util.Scanner;

public class entrada_de_dados2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // quebra de linha pendente
        int x;
        String a, b, c;

        x = sc.nextInt();
        sc.nextLine(); // para consumir a entrada de dados pendente
        a = sc.nextLine();
        b = sc.nextLine();
        c = sc.nextLine();

        System.out.println(x);
        System.out.println(a);
        System.out.println(b);
        System.out.println(c);


    }
}