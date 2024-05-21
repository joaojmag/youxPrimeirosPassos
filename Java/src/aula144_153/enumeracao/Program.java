package aula144_153.enumeracao;

import java.util.Date;

public class Program {
    public static void main(String[] args) {

        Order order = new Order(1080, new Date(), OrderStatus.PENDING_PAYMENT);

        System.out.println(order);

        OrderStatus os1 = OrderStatus.DELIVEERED;
        OrderStatus os2 = OrderStatus.valueOf("DELIVEERED");

        System.out.println(os1);
        System.out.println(os2);
    }
}