package aula167_178.try_catch;

import java.util.InputMismatchException;
import java.util.Scanner;

public class Program {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        try {
            String[] vect = sc.nextLine().split(" ");
            int position = sc.nextInt();
            System.out.println(vect[position]);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Posição invalida");
        } catch (InputMismatchException e) {
            System.out.println("Valor invalido");
        }

        System.out.println("Fim do programa!");
    }
}