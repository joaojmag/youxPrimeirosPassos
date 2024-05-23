package aula154_166.UpcastingDowncasting;

public class BusunessAccount extends Account {

    private Double loanLimit;

    public BusunessAccount() {
        super();
    }

    public BusunessAccount(Integer number, String holder, Double balance, Double loanLimit) {
        super(number, holder, balance);
        this.loanLimit = loanLimit;
    }

    public Double getLoanLimit() {
        return loanLimit;
    }

    public void setLoanLimit(Double loanLimit) {
        this.loanLimit = loanLimit;
    }

    public void loan(double amount) {
        if (amount <= loanLimit) {
            balance += amount -10.0;
//            deposit(amount);
        }
    }
}