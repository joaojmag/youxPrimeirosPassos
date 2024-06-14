package aula237_250_GenericsSetMap.Map.ExercicioProposto;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class Program {
    public static void main(String[] args) {

        String path = "/home/youx/Documentos/youxPrimeirosPassos/Java/src/aula237_250_GenericsSetMap/Map/ExercicioProposto/in.csv";

        try (BufferedReader br = new BufferedReader(new FileReader(path))) {
            Map<String, Integer> map = new HashMap<>();

            String line = br.readLine();

            while (line != null) {
                String[] vet = line.split(",");

                if (map.get(vet[0]) == null) {
                    map.put(vet[0], Integer.parseInt(vet[1]));
                } else {
                    map.put(vet[0], map.get(vet[0]) + Integer.parseInt(vet[1]));
                }
                line = br.readLine();
            }
            System.out.println("Enter file full path: " + path);

            for (String i : map.keySet()) {
                System.out.println(i + ": " + map.get(i));
            }

        } catch (IOException e) {
            System.out.println(e.getMessage());
        }
    }
}