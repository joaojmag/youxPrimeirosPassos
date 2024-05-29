package aula167_178.blocoFinally;


import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Program {

    public static void main(String[] args) {

        File file = new File("./teste.txt");
        Scanner sc = null;
        try {
            sc = new Scanner(file);
            while (sc.hasNextLine()) {
                System.out.println(sc.hasNextLine());
            }
        }
        catch (FileNotFoundException e) {
            System.out.println("Error opening file " + e.getMessage());
        }
        finally {
            if (sc != null) {
                sc.close();
            }
            System.out.println("finalizando o bloco finally");

        }

    }

}