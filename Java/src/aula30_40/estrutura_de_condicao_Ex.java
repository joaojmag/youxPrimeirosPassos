package aula30_40;

import java.util.Scanner;

public class estrutura_de_condicao_Ex {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int minutos, tarifa, valorBase, x;
        tarifa = 2;
        valorBase = 50;

        System.out.println("Digite o tempo gasto em minutos:");
        minutos = sc.nextInt();

        if (minutos <= 100) {
            System.out.println("Valor a pagar R$ 50.00");
        } else {
            x = (minutos - 100) * tarifa + valorBase;
            System.out.printf("Valor a pagar R$ %d.00", x);
        }

        sc.close();
    }
}