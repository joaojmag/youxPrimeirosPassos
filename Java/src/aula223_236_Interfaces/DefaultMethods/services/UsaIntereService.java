package aula223_236_Interfaces.DefaultMethods.services;

public class UsaIntereService implements InterestService {

    private double interestRate;

    public UsaIntereService(double interestRate) {
        this.interestRate = interestRate;
    }

    @Override
    public double getInterestRate() {
        return interestRate;
    }
}