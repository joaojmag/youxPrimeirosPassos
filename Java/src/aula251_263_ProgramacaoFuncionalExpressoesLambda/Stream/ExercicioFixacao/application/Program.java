package aula251_263_ProgramacaoFuncionalExpressoesLambda.Stream.ExercicioFixacao.application;


import aula251_263_ProgramacaoFuncionalExpressoesLambda.Stream.ExercicioFixacao.entities.Employee;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.*;

public class Program {

    public static void main(String[] args) {

        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);


        System.out.print("Nome do arquivo: ");
        String arquivo = sc.nextLine();
        String path = String.format("/home/youx/Documentos/youxPrimeirosPassos/Java/src/aula251_263_ProgramacaoFuncionalExpressoesLambda/Stream/ExercicioFixacao/%s", arquivo);
        System.out.print("Enter salary: ");
        double valorDeCorte = sc.nextDouble();


        try (BufferedReader br = new BufferedReader(new FileReader(path))) {
            List<Employee> list = new ArrayList<>();

            String line = br.readLine();
            while (line != null) {
                String[] vet = line.split(",");
                list.add(new Employee(vet[0], vet[1], Double.parseDouble(vet[2])));
                line = br.readLine();
            }

            List<Employee> mediaSalario = list.stream().filter(employee -> employee.getSalary() > valorDeCorte).toList();
            List<String> email = mediaSalario.stream().map(Employee::getEmail).sorted().toList();

            System.out.printf("Email of people whose salary is more than %.2f:%n", valorDeCorte);
            email.forEach(System.out::println);

            for (Employee i : list){
                if(i.getName().charAt(0) == 'M'){
                    

                }
            }

        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
        sc.close();
    }
}
