package aula1_23;

public class ExCasting {
    public static void main(String[] args) {

        double a;
        int b, c;

        a = 5.0;
        b = (int) a;
        c = 2;

        System.out.printf("%d %n", b);

        System.out.print(c / a);
    }
}