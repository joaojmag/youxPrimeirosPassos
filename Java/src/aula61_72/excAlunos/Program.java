package excAlunos;

import java.util.Locale;
import java.util.Scanner;

import excAlunos.Student;

public class Program {
    public static void main(String[] args) {

        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        Student aluno = new excAlunos.Student();

        System.out.print("Nome: ");
        aluno.nome = sc.nextLine();
        System.out.print("Nota 1: ");
        aluno.nota1 = sc.nextDouble();
        System.out.print("Nota 2: ");
        aluno.nota2 = sc.nextDouble();
        System.out.print("Nota 3: ");
        aluno.nota3 = sc.nextDouble();

        System.out.println(aluno);

    }
}