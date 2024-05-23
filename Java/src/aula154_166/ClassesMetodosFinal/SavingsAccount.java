package aula154_166.ClassesMetodosFinal;

// a palavra final não permite que a clase seja erdada!
//public final class SavingsAccount extends Account {
public class SavingsAccount extends Account {
    private Double interestRate;

    public SavingsAccount() {
        super();
    }

    public SavingsAccount(Integer number, String holder, Double balance, Double interestRate) {
        super(number, holder, balance);
        this.interestRate = interestRate;
    }

    public Double getInterestRate() {
        return interestRate;
    }

    public void setInterestRate(Double interestRate) {
        this.interestRate = interestRate;
    }

    public void updateBalance() {
        balance += balance * interestRate;
    }

    @Override
//    A palavra final impede que o método seja sobreescrito em outras clases
//    public final void withdraw(double amount) {
//        balance -= amount;
//    }
    public void withdraw(double amount) {
        balance -= amount;
    }

}