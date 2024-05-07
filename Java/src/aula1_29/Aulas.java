package aula1_29;

public class Aulas {
    public static void main(String[] args) {
        int y = 32;
        double x = 10.356987;
        String nome = "Maria";

        System.out.println("Olá -> " + y);
        System.out.println(x);
        System.out.printf("%.4f%n", x);
        System.out.printf("%.4f%n %d%n", x, y);
        System.out.printf("%s tem %d anos e uma dívida de %.4f%n", nome, y, x);
        System.out.print("João");

    }
}