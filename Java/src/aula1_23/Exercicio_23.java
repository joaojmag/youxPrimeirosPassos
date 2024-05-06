package aula1_23;

import java.util.Locale;

public class Exercicio_23 {
    public static void main(String[] args) {
        String produdo1 = "Computador";
        String produto2 = "Office desk";

        int age = 30;
        int cod = 507845;
        char genero = 'F';

        double preco1 = 2158.0;
        double preco2 = 618.0;
        double measure = 25.78787578754521;

        System.out.println("Produtos");
        System.out.printf("%s R$ %f%n", produdo1, preco1);
        System.out.printf("%s R$ %f%n%n", produto2, preco2);

        System.out.printf("Record: %d years old, code %d and genero %c%n", age, cod, genero);

        System.out.printf("Measus with eight decimal places: %f%n", measure);
        System.out.printf("Measus with eight decimal places: %.3f%n", measure);
        Locale.setDefault(Locale.US);
        System.out.printf("Measus with eight decimal places: %f%n", measure);
    }
}