package aula84_103.vetores.exeFixacao;

import java.util.Locale;
import java.util.Scanner;

import aula84_103.vetores.exeFixacao.Pensionato;

public class Program {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        Pensionato[] vet = new Pensionato[10];

        System.out.print("How many rooms will be rented? ");
        int numP = sc.nextInt();
        sc.nextLine();

        for (int i = 0; i < numP; i++) {
            System.out.printf("%nRent #%d:%n", i + 1);
            System.out.print("Nome: ");
            String nome = sc.nextLine();
            System.out.print("Email: ");
            String email = sc.nextLine();
            System.out.print("Room: ");
            int numQuarot = sc.nextInt();
            sc.nextLine();

            vet[numQuarot] = new Pensionato(nome, email, numQuarot);
        }

        System.out.printf("%nBusy rooms:%n");
        for (int i = 0; i < vet.length; i++) {
            if (vet[i] != null) {
                System.out.printf("%d: %s, %s%n", vet[i].getNumQuarto(), vet[i].getNome(), vet[i].getEmail());
            }
        }
    }
}