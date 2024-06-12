package aula237_250_GenericsSetMap.TiposCuringa;

import java.util.Arrays;
import java.util.List;

public class Program {
    public static void main(String[] args) {
        List<Integer> myInts = Arrays.asList(5, 2, 10);
        printList(myInts);

        List<String> myNames = Arrays.asList("joão", "Pedro", "Maria");
        printList(myNames);
    }

    public static void printList(List<?> list) {
        for (Object obj : list) {
            System.out.println(obj);
        }
    }
}