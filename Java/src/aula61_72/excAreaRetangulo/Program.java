package excAreaRetangulo;

import java.util.Locale;
import java.util.Scanner;

import excAreaRetangulo.Rectangle;

public class Program {
    public static void main(String[] args) {

        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        Rectangle retangulo = new Rectangle();
        System.out.println("Enter rectangle width and height: ");
        retangulo.width = sc.nextDouble();
        retangulo.height = sc.nextDouble();

        System.out.println(retangulo);
    }
}