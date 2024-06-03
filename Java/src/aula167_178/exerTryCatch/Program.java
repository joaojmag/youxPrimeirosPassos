package aula167_178.exerTryCatch;

import aula167_178.exerTryCatch.modal.Account;
import aula167_178.exerTryCatch.modal.exceptions.DomainException;

import java.util.Locale;
import java.util.Scanner;

public class Program {
    public static void main(String[] args) {

        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter account data");
        System.out.print("Number: ");
        int number = sc.nextInt();
        sc.nextLine();
        System.out.print("Holder: ");
        String holder = sc.nextLine();
        System.out.print("Initial balance: ");
        double balance = sc.nextDouble();
        System.out.print("Withdraw limit: ");
        double limit = sc.nextDouble();
        Account account = new Account(number, holder, balance, limit);

        System.out.printf("%nEnter amount for withdraw: ");
        double withdraw = sc.nextDouble();

        try {
            account.withdraw(withdraw);
            System.out.print(account);
        } catch (DomainException e) {
            System.out.print("Withdraw error: " + e.getMessage());
        } finally {
            sc.close();
        }
    }
}