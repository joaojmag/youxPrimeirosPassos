package aula154_166.exercicioAbstrato;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.Scanner;

public class Program {
    public static void main(String[] args) {

        List<Pessoa> list = new ArrayList<>();
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the number of tax payers: ");
        int n = sc.nextInt();
        for (int i = 1; i <= n; i++) {
            System.out.println("Tax payer #" + i + " data:");
            System.out.print("Individual or company (i/c)? ");
            char ic = sc.next().charAt(0);
            sc.nextLine();
            System.out.print("Name: ");
            String nome = sc.nextLine();
            System.out.print("Anual income: ");
            double renda = sc.nextDouble();

            if (ic == 'i') {
                System.out.print("Health expenditures: ");
                double medicamento = sc.nextDouble();
                list.add(new Pfisica(nome, renda, medicamento));
            } else {
                System.out.print("Number of employees: ");
                int funcionarios = sc.nextInt();
                list.add(new Pjuridica(nome, renda, funcionarios));
            }
        }

        System.out.println("TAXES PAID:");
        double sum = 0.0;
        for (Pessoa j : list) {
            System.out.printf("%s: $ %.2f%n", j.getNome(), j.imposto());
            sum += j.imposto();
        }

        System.out.printf("TOTAL TAXES: $ %.2f", sum);


        sc.close();
    }
}