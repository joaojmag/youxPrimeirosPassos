package excAreaRetangulo;

public class Rectangle {
    public double width;
    public double height;

    public double area() {
        return width * height;
    }

    public double perimeter() {
        return 2 * width + 2 * height;
    }

    public double diagonal() {
        return Math.sqrt(width * width + height * height);
    }

    public String toString() {
        return "Área: " + String.format("%.2f%n", area()) +
                "Perimetro: " + String.format("%.2f%n", perimeter()) +
                "Diagonal: " + String.format("%.2f%n", diagonal());
    }
}