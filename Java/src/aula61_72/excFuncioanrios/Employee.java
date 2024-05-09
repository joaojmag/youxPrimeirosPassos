package excFuncioanrios;

public class Employee {

    public String name;
    public double grossSalaty;
    public double tax;

    public double netSalaty() {
        return this.grossSalaty - tax;
    }

    public void increaseSalary(double percent) {
        this.grossSalaty = (grossSalaty * percent) / 100.0 + grossSalaty;
    }

    public String toString() {
        return name + ", $ " + String.format("%.2f", netSalaty());
    }
}