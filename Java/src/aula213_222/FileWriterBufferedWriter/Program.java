package aula213_222.FileWriterBufferedWriter;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class Program {
    public static void main(String[] args) {

        String[] lines = new String[]{"Bom dia", "Boa tarde", "Boa noite"};
        String path = "/home/youx/Documentos/youxPrimeirosPassos/Java/src/aula213_222/FileWriterBufferedWriter/out.txt";

        // com o parametro true o arquivo não é sobre escrito
//        try (BufferedWriter bw = new BufferedWriter(new FileWriter(path, true))) {
        try (BufferedWriter bw = new BufferedWriter(new FileWriter(path))) {
            for (String line : lines) {
                bw.write(line);
                bw.newLine();
            }

        } catch (IOException e) {
            e.printStackTrace();
        }

    }
}