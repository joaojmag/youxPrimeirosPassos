package aula237_250_GenericsSetMap.Set.ExercicioResolvidoSet.application;

import aula237_250_GenericsSetMap.Set.ExercicioResolvidoSet.entities.LogEntry;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.time.Instant;
import java.util.Date;
import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class Program {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        System.out.print("Digite o nome do arquivo: ");
        String nomeArquivo = sc.nextLine();
        String path = String.format("/home/youx/Documentos/youxPrimeirosPassos/Java/src/aula237_250_GenericsSetMap/Set/ExercicioResolvidoSet/%s.txt", nomeArquivo);

        try (BufferedReader br = new BufferedReader(new FileReader(path))) {

            Set<LogEntry> set = new HashSet<>();
            String line = br.readLine();
            while (line != null) {
                String[] filds = line.split(" ");
                String username = filds[0];
                Date moment = Date.from(Instant.parse(filds[1]));

                set.add(new LogEntry(username, moment));

                line = br.readLine();
            }
            System.out.println("Total users: " + set.size());

        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
        sc.close();
    }

}
