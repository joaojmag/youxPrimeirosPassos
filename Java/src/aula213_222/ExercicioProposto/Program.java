package aula213_222.ExercicioProposto;

import java.io.*;
import java.util.Arrays;
import java.util.Locale;

public class Program {
    public static void main(String[] args) {

        Locale.setDefault(Locale.US);
        String path = "/home/youx/Documentos/youxPrimeirosPassos/Java/src/aula213_222/ExercicioProposto";

        boolean success = new File(path + "/out").mkdir();

        try (BufferedReader br = new BufferedReader(new FileReader(path + "/in.csv"))) {
            BufferedWriter bw = new BufferedWriter(new FileWriter(path + "/out/summary.csv"));

            String line = br.readLine();

            while (line != null) {
                String[] list = line.split(",");

                Summary summary = new Summary(list[0], Double.parseDouble(list[1]), Integer.parseInt(list[2]));
//                System.out.println(summary);

                bw.write(summary.toString());
                bw.newLine();

                line = br.readLine();
            }
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }


    }
}