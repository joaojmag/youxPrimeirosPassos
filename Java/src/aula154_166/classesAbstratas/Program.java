package aula154_166.classesAbstratas;

import java.util.ArrayList;
import java.util.List;

public class Program {

    public static void main(String[] args) {

        List<Account> list = new ArrayList<>();
//        Account acc1 = new Account(1001, "Alex", 1000.0); Não pode ser instanciada
//        Account acc2 = new SavingsAccount(1002, "Maria", 1000.0, 0.01);
//        Account acc3 = new BusinessAccount(1003, "Bob", 1000.0, 500.0);

        list.add(new SavingsAccount(1002, "Maria", 600.0, 0.01));
        list.add(new BusinessAccount(1003, "Bob", 1000.0, 500.0));
        list.add(new SavingsAccount(1004, "João", 900.0, 0.01));
        list.add(new BusinessAccount(1005, "Marcelo", 1500.0, 40.0));

        double sum = 0.0;
        for (Account acc : list) {
            sum += acc.getBalance();
        }
        System.out.printf("Total balance: %.2f%n", sum);

        for (Account acc : list) {
            acc.deposit(10.0);
        }

        for (Account acc : list) {
            System.out.printf("Updated balance for account %d: %.2f%n", acc.getNumber(), acc.getBalance());
        }

        System.out.printf("Total balance: %.2f%n", sum);
    }
}