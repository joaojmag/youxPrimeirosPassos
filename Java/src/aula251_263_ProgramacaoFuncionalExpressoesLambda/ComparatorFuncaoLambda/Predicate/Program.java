package aula251_263_ProgramacaoFuncionalExpressoesLambda.ComparatorFuncaoLambda.Predicate;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

public class Program {
    public static void main(String[] args) {

        List<Product> list = new ArrayList<>();

        list.add(new Product("Tv", 900.00));
        list.add(new Product("Mouse", 50.00));
        list.add(new Product("Tablet", 350.50));
        list.add(new Product("HD Case", 80.90));

//        list.removeIf(p -> p.getPrice() >= 100);
//        list.removeIf(new ProductPredicate());
//        list.removeIf(Product::staticProductPredicate);
//        list.removeIf(Product::nonStaticProductPredicate);

//        Predicate<Product> prod = p -> p.getPrice() >= 100.0;
//        list.removeIf(prod);

        list.removeIf(p -> p.getPrice() >= 100.0);

//        list.forEach(e -> System.out.println(e));
        list.forEach(System.out::println);

    }
}