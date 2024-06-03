package aula213_222.BlocoTryWith_resources;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class Program {
    public static void main(String[] args) {

        String path = """
                /home/youx/Documentos/youxPrimeirosPassos/Java/src/aula213_222/lendoArquivoTexto/in.txt""";


        try (BufferedReader br = new BufferedReader(new FileReader(path))) {
            String line = br.readLine();

            while (line != null) {
                System.out.println(line);
                line = br.readLine();
            }
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}