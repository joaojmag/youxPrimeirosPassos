package aula144_153.exeFixacao;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;
import java.util.Scanner;

public class Program {
    public static void main(String[] args) throws ParseException {

        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
        SimpleDateFormat sdf2 = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter cliente data:");
        System.out.print("Name: ");
        String name = sc.nextLine();
        System.out.print("Email: ");
        String email = sc.nextLine();
        System.out.print("Birth date (DD/MM/YYYY): ");
        String date = sc.nextLine();
        Client client = new Client(name, email, sdf.parse(date));


        System.out.println("Enter order data:");
        System.out.print("Status: ");
        String status = sc.nextLine();
        System.out.print("How many items to this order? ");
        int num = sc.nextInt();
        sc.nextLine();
        Order order = new Order(new Date(), OrderStatus.valueOf(status));

        for (int i = 0; i < num; i++) {
            System.out.printf("Enter #%d item data:%n", i + 1);
            System.out.print("Product name: ");
            String nameProduct = sc.nextLine();
            System.out.print("Product price: ");
            double priceProduct = sc.nextDouble();
            System.out.print("Quantity: ");
            int quantile = sc.nextInt();
            sc.nextLine();
            Product product = new Product(nameProduct, priceProduct);
            OrderItem orderItem = new OrderItem(quantile, priceProduct, product);
            order.addItem(orderItem);
        }

        System.out.println("ORDER SUMMARY:");
        System.out.println("Order moment: " + sdf2.format(order.getMoment()));
        System.out.println("Order status: " + order.getStatus());
        System.out.println("Client: " + client.getName() + " (" + sdf.format(client.getBirthDate()) + ")" + " - " + client.getEmail());
        System.out.println("Order items:");

        for (OrderItem i : order.getOrderItems()) {
            System.out.println(i.getProduct().getName() + ", $" + i.getProduct().getPrice() + ", Quantity: " + i.getQuantity() + ", Subtotal: " + i.subTotal());
        }
        System.out.printf("Total price: $%.2f" , order.total());
    }
}