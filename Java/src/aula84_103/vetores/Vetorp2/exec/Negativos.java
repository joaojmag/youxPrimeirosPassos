import java.util.Locale;
import java.util.Scanner;

public class Negativos {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] vet = new int[n];

        for (int i = 0; i < vet.length; i++) {
            vet[i] = sc.nextInt();
        }

        for (int i = 0; i < vet.length; i++) {
            if(vet[i] < 0){
                System.out.println(vet[i]);
            }
        }

    }
}