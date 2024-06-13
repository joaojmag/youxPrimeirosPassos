package aula237_250_GenericsSetMap.Set.ExercicioProposto.application;

import aula237_250_GenericsSetMap.Set.ExercicioProposto.application.entities.Alunos;

import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class Program {
    public static void main(String[] args) {
        String[] trumas = {"A", "B", "C"};

        try (Scanner sc = new Scanner(System.in)) {
            Set<Alunos> set = new HashSet<>();

            for (String i : trumas) {
                System.out.printf("\nHow many students for course %s? ", i);
                int numAlunos = sc.nextInt();
                for (int j = 0; j < numAlunos; j++) {
                    System.out.print("Digite seu número de mátricula: ");
                    int numMatricula = sc.nextInt();
                    set.add(new Alunos(numMatricula));
                }
            }

            System.out.println("Total students: " + set.size());

        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
}
