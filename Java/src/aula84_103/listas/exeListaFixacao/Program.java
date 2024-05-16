package aula84_103.listas.exeListaFixacao;

import java.util.*;

public class Program {
    public static void main(String[] args) {

        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        System.out.print("How many employees will be registered? ");
        int N = sc.nextInt();
        sc.nextLine();

        List<Employee> lista = new ArrayList<>();

        for (int i = 0; i < N; i++) {
            System.out.printf("%nEmplyoee #%d%n", 1 + i);
            System.out.print("ID: ");
            int id = sc.nextInt();
            sc.nextLine();

            System.out.print("Name: ");
            String name = sc.nextLine();

            System.out.print("Salary: ");
            double salary = sc.nextDouble();

            lista.add(new Employee(id, name, salary));
        }

        System.out.printf("%nEnter the employee id that will have salary increase : ");
        int employeeId = sc.nextInt();

        Employee valor = lista.stream().filter(x -> x.getId() == employeeId).findFirst().orElse(null);
        if (valor != null) {
            System.out.print("Enter the percentage: ");
            double percentage = sc.nextDouble();
            valor.increaseSalary(percentage);

        } else {
            System.out.println("This id does not exist!");
        }

        System.out.println("List of employees:");
        for (Employee i : lista) {
            System.out.printf("%d, %s, %.2f%n", i.getId(), i.getNome(), i.getSalario());
        }

        sc.close();
    }
}