package aula154_166.exePolimorfismo;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.Scanner;

public class Program {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);
        List<Employee> employeesList = new ArrayList<>();

        System.out.print("Enter the number of employees: ");
        int num = sc.nextInt();

        for (int i = 0; i < num; i++) {
            System.out.printf("Employee #%d data:", i + 1);
            System.out.print("Outsourced (y/n)? ");
            char yn = sc.next().charAt(0);
            sc.nextLine();
            System.out.print("Name: ");
            String name = sc.nextLine();
            System.out.print("Hours: ");
            int hours = sc.nextInt();
            System.out.print("Value per hour: ");
            double valorHoras = sc.nextDouble();
            if (yn == 'y') {
                System.out.print("Additional charge: ");
                double additional = sc.nextDouble();
                employeesList.add(new OutsourcedEmployee(name, hours, valorHoras, additional));
            } else {
                employeesList.add(new Employee(name, hours, valorHoras));
            }
        }

        System.out.println("PAYMENTS:");
        for (Employee i : employeesList) {
            System.out.println(i.getName() + " - $ " + String.format("%.2f", i.payment()));
        }
        sc.close();
    }
}