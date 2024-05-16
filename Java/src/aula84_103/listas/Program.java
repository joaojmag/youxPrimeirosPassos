package aula84_103.listas;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class Program {
    public static void main(String[] args) {

        List<String> list = new ArrayList<>();

        list.add("Maria");
        list.add("Alex");
        list.add("Bob");
        list.add("Anna");
        list.add("Lucas");
        list.add("Barbara");
        list.add("Bruna");
        list.add(2, "Joao");

        System.out.println(list.size());
        list.remove("Bob");
        list.remove(2);

        for (String i : list) {
            System.out.println(i);
        }
        System.out.println("--------------------");
        System.out.println(list.size());
        list.removeIf(x -> x.charAt(0) == 'A');

        for (String i : list) {
            System.out.println(i);
        }

        System.out.println("--------------------");
        System.out.println("Index of Bob: " + list.indexOf("Maria"));
        System.out.println("Index of Joao: " + list.indexOf("Joao"));

        System.out.println("--------------------");
        List<String> result = list.stream().filter(x -> x.charAt(0) == 'B').collect(Collectors.toList());

        for (String x : result) {
            System.out.println(x);
        }
        System.out.println("--------------------");
        String name = list.stream().filter(x -> x.charAt(0) == 'B').findFirst().orElse(null);
        System.out.println(name);
    }
}