package aula154_166.ClassesMetodosFinal;

public class SavingsAccountPlus extends SavingsAccount {

    @Override
    public void withdraw(double amount) {
        balance -= amount + 2.0;
    }

}