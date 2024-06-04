package aula213_222.ExercicioProposto;

import java.io.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

public class Program {
    public static void main(String[] args) {

        Locale.setDefault(Locale.US);
        String path = "/home/youx/Documentos/youxPrimeirosPassos/Java/src/aula213_222/ExercicioProposto";
        List<Summary> list = new ArrayList<>();

        boolean success = new File(path + "/out").mkdir();

        try (BufferedReader br = new BufferedReader(new FileReader(path + "/in.csv"))) {

            String line = br.readLine();

            while (line != null) {
                String[] lista = line.split(",");
                list.add(new Summary(lista[0], Double.parseDouble(lista[1]), Integer.parseInt(lista[2])));
                line = br.readLine();
            }

            try (BufferedWriter bw = new BufferedWriter(new FileWriter(path + "/out/summary.csv"))) {

                for (Summary i : list) {
                    bw.write(i.toString());
                    System.out.println(i);
                    bw.newLine();
                }

            } catch (IOException e) {
                System.out.println("Error: " + e.getMessage());
            }

        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}