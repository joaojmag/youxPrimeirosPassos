package aula167_178.pilhaChamadaMetodoStackTrace;

import java.util.InputMismatchException;
import java.util.Scanner;

public class Program {
    public static void main(String[] args) {

        method1();

        System.out.println("Fim do programa!");

    }

    public static void method1() {
        System.out.println("***METHOD1 START***");
        method2();
        System.out.println("***METHOD1 END***");

    }


    public static void method2() {
        System.out.println("***METHOD2 START***");
        Scanner sc = new Scanner(System.in);

        try {
            String[] vect = sc.nextLine().split(" ");
            int position = sc.nextInt();
            System.out.println(vect[position]);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Posição invalida");
            e.printStackTrace();
            sc.next();
        } catch (InputMismatchException e) {
            System.out.println("Valor invalido");
        }

        sc.close();
        System.out.println("***METHOD2 END***");

    }


}