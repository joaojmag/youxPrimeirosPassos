package aula41_54;

import java.util.Scanner;

public class enquanto_while {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int num, val;
        val = 0;
        num = sc.nextInt();

        while (num != 0) {
            val += num;
            num = sc.nextInt();
        }

        System.out.println(val);
        sc.close();
    }
}