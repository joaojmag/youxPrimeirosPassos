package execFixacao;

import java.util.Locale;
import java.util.Scanner;

import execFixacao.ContaBanco;

public class Program {

    public static void main(String[] args) {

        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter account number: ");
        int numero = sc.nextInt();
        System.out.print("Enter account holder: ");
        sc.nextLine();
        String nome = sc.nextLine();
        System.out.print("Is there na initial deposit (y/n)? ");
        char yn = sc.next().charAt(0);

        ContaBanco conta = new ContaBanco(numero, nome);

        if (yn == 'y') {
            System.out.print("Enter initial deposit value: ");
            double valor = sc.nextDouble();
            conta.deposito(valor);
        }

        System.out.println("Account data: ");
        System.out.println(conta);

        System.out.print("Enter a deposit value: ");
        double valor = sc.nextDouble();
        conta.deposito(valor);

        System.out.println("Account data: ");
        System.out.println(conta);

        System.out.print("Enter a withdraw value: ");
        valor = sc.nextDouble();
        conta.retirada(valor);

        System.out.println("Account data: ");
        System.out.println(conta);

        sc.close();
    }
}