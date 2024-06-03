package aula213_222.lendoArquivoTexto;

import java.io.File;
import java.io.IOException;
import java.util.Scanner;

public class Program {
    public static void main(String[] args) {

        String urlBase = "/home/youx/Documentos/youxPrimeirosPassos/Java/src/aula213_222/lendoArquivoTexto";
        File file = new File(urlBase + "/in.txt");
        Scanner sc = null;
        try {
            sc = new Scanner(file);
            while (sc.hasNextLine()) {
                System.out.println(sc.nextLine());
            }
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        } finally {
            if (sc != null)
                sc.close();
        }

    }
}