package aula237_250_GenericsSetMap.Set;

import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.Set;
import java.util.TreeSet;

public class Demo1 {
    public static void main(String[] args) {

//        Set<String> set = new HashSet<>(); // o mais repido mais não mantem a ordem quando é copilado
//        Set<String> set = new TreeSet<>(); // o mais lento e faz a ordenação por ordem alfabetica
        Set<String> set = new LinkedHashSet<>(); // intermediario e mantem a ordem
        // da forma que esta abaixo vamos verificar se o elemento esta na lista Set

        set.add("Tv");
        set.add("Notebook");
        set.add("Tablet");
        set.add("DD");
        System.out.println(set.contains("Notebook"));
        for (String p : set) {
            System.out.println(p);
        }

        //para remover um elemneto
        System.out.println("=========================");
        set.remove("Tablet");
        for (String p : set) {
            System.out.println(p);
        }

        // remove deacordo com o predicado "com a condição"
        System.out.println("=========================");
        set.removeIf(x -> x.length() >= 3); // remove palavras com mais de 3 caracteres
        set.removeIf(x -> x.charAt(0) == 'T'); // remove palavras que inicia com a letra T
        for (String p : set) {
            System.out.println(p);
        }


    }
}