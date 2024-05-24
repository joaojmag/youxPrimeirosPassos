package aula154_166.Sobreposicao_e_Polimorfismo;

public class Program {
    public static void main(String[] args) {

        Account acc1 = new Account(1001, "Joao", 1000.0);
        acc1.withdraw(200.0);
        System.out.println(acc1.getBalance());

        Account acc2 = new SavingsAccount(1002, "Marcelo", 1000.0, 0.01);
        acc2.withdraw(200.0);
        System.out.println(acc2.getBalance());

        Account acc3 = new BusunessAccount(1003, "Almeida", 1000.0, 500.0);
        acc3.withdraw(200.0);
        System.out.println(acc3.getBalance());

    }
}