package aula55_60;

import java.util.Scanner;

public class operadorBitwise {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int mask = 0b00100000; //32
        int n = sc.nextInt();

        if ((n & mask) != 0) {
            System.out.println("6 bit é verdadeiro");
        } else {
            System.out.println("6 bit é falso");
        }
    }
}