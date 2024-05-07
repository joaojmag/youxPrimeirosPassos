package aula1_29;

public class funcoes_matematicas {
    public static void main(String[] args) {
        double x = 3.0;
        double y = 4.0;
        double z = -5.0;
        double A, B, C;

        A = Math.sqrt(x);
        B = Math.sqrt(y);
        C = Math.sqrt(25.0);

        System.out.println("Raiz quadrada de " + x + " = " + A);
        System.out.println(Math.pow(1.7320508075688772, 2));


        A = Math.pow(z, 3);
        System.out.println(A);

        B = Math.abs(z);
        System.out.println(B);

        double a, b, c, D, x1, x2;

        a = 2;
        b = 4;
        c = 2;

        D = Math.pow(b, 2.0) - 4 * a * c;
        System.out.println("Delta" + D);
        x1 = -b + Math.sqrt(D);
        x2 = -b - Math.sqrt(D);

        System.out.println(x1);
        System.out.println(x2);
    }
}