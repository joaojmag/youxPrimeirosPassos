package excFuncioanrios;

import java.util.Locale;
import java.util.Scanner;

import excFuncioanrios.Employee;

public class Program {
    public static void main(String[] args) {

        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        Employee employee = new Employee();

        System.out.print("Nome: ");
        employee.name = sc.nextLine();
        System.out.print("Gross: ");
        employee.grossSalaty = sc.nextDouble();
        System.out.print("Tax: ");
        employee.tax = sc.nextDouble();

        System.out.println();
        System.out.println("Employee: " + employee);

        System.out.println();
        System.out.print("Which percentage to increase salary? ");
        double incement = sc.nextDouble();
        employee.increaseSalary(incement);

        System.out.println();
        System.out.println("Updated data: " + employee);

    }
}