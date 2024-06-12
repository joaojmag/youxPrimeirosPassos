package aula223_236_Interfaces.DefaultMethods.services;

public class BrazillntereService implements InterestService {

    private double interestRate;

    public BrazillntereService(double interestRate) {
        this.interestRate = interestRate;
    }

    @Override
    public double getInterestRate() {
        return interestRate;
    }
}