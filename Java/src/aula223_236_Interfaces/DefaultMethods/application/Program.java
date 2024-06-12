package aula223_236_Interfaces.DefaultMethods.application;

import aula223_236_Interfaces.DefaultMethods.services.BrazillntereService;
import aula223_236_Interfaces.DefaultMethods.services.InterestService;
import aula223_236_Interfaces.DefaultMethods.services.UsaIntereService;

import java.security.InvalidParameterException;
import java.util.Locale;
import java.util.Scanner;

public class Program {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);

        try (Scanner sc = new Scanner(System.in)) {


            System.out.print("Amount: ");
            double amount = sc.nextDouble();
            System.out.print("Months: ");
            int months = sc.nextInt();

            InterestService is = new BrazillntereService(2.0);
            double payment = is.payment(amount, months);

            System.out.println("Playment after " + months + " months:");
            System.out.println(String.format("%.2f", payment));

        } catch (InvalidParameterException e) {
            System.out.println(e.getMessage());
        }
    }
}