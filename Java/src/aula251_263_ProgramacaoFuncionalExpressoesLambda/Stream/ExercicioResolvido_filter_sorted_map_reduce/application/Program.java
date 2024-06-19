package aula251_263_ProgramacaoFuncionalExpressoesLambda.Stream.ExercicioResolvido_filter_sorted_map_reduce.application;


import aula251_263_ProgramacaoFuncionalExpressoesLambda.Stream.ExercicioResolvido_filter_sorted_map_reduce.entities.Product;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.*;

public class Program {

    public static void main(String[] args) {

        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        System.out.print("Nome do arquivo: ");
        String arquivo = sc.nextLine();
        String path = String.format("/home/youx/Documentos/youxPrimeirosPassos/Java/src/aula251_263_ProgramacaoFuncionalExpressoesLambda/Stream/ExercicioResolvido_filter_sorted_map_reduce/%s", arquivo);

        try (BufferedReader br = new BufferedReader(new FileReader(path))) {

            List<Product> list = new ArrayList<>();

            String line = br.readLine();
            while (line != null) {
                String[] fields = line.split(",");
                list.add(new Product(fields[0], Double.parseDouble(fields[1])));
                line = br.readLine();
            }

            double avg = list.stream()
//                    .map(p -> p.getPrice())
                    .map(Product::getPrice)
//                    .reduce(0.0, (x, y) -> x + y) / list.size();
                    .reduce(0.0, Double::sum) / list.size();

            System.out.println("Average price: " + String.format("%.2f", avg));

            Comparator<String> comp = (s1, s2) -> s1.toUpperCase().compareTo(s2.toUpperCase());

            List<String> names = list.stream()
                    .filter(p -> p.getPrice() < avg)
                    .map(p -> p.getName())
                    .sorted(comp.reversed()).toList();

            names.forEach(System.out::println);

        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
        sc.close();
    }
}
