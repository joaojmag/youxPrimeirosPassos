package aula144_153.exeFixacao;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Order {

    private Date moment;
    private OrderStatus status;
    private List<OrderItem> orderItems = new ArrayList<>();

    public Order() {
    }

    public Order(Date moment, OrderStatus status) {
        this.moment = moment;
        this.status = status;
    }

    public Date getMoment() {
        return moment;
    }

    public void setMoment(Date moment) {
        this.moment = moment;
    }

    public OrderStatus getStatus() {
        return status;
    }

    public void setStatus(OrderStatus status) {
        this.status = status;
    }

    public List<OrderItem> getOrderItems() {
        return orderItems;
    }

    public void addItem(OrderItem item) {
        orderItems.add(item);
    }

    public void removeItem(OrderItem item) {
        orderItems.remove(item);
    }

    public Double total() {
        double total = 0.0;
        for (OrderItem i : orderItems) {
            total += i.getPrice();
        }
        return total;
    }
}