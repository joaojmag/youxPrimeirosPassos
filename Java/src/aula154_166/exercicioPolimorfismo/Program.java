package aula154_166.exercicioPolimorfismo;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.Scanner;

public class Program {
    public static void main(String[] args) throws ParseException {

        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
        List<Product> list = new ArrayList<>();
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the number of products: ");
        int num = sc.nextInt();

        for (int i = 1; i <= num; i++) {
            System.out.printf("Product #%d data: %n", i);
            System.out.print("Common, used or imported (c/u/i)? ");
            char cui = sc.next().charAt(0);
            sc.nextLine();

            System.out.print("Name: ");
            String name = sc.nextLine();
            System.out.print("Price: ");
            double price = sc.nextDouble();
            sc.nextLine();

            if (cui == 'c') {
                Product product = new Product(name, price);
                list.add(product);
            } else if (cui == 'u') {
                System.out.print("Manufacture date (DD/MM/YYYY): ");
                String data = sc.nextLine();
                Product product = new UsedProduct(name, price, sdf.parse(data));
                list.add(product);
            } else {
                System.out.print("Customs fee: ");
                double customsFee = sc.nextDouble();
                Product product = new ImportedProduct(name, price, customsFee);
                list.add(product);
            }
        }

        System.out.println("PRICE TAGS:");
        for (Product i : list) {
            System.out.println(i.priceTag());
        }
    }
}