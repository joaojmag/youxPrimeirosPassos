package aula84_103.matrizes;

import java.util.Arrays;
import java.util.Scanner;

public class ProgramMatNpM {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Número N de linhas: ");
        int N = sc.nextInt();
        System.out.print("Número M de colunas: ");
        int M = sc.nextInt();

        int[][] mat = new int[N][M];

        for (int i = 0; i < N; i++) {
            for (int j = 0; j < M; j++) {
                mat[i][j] = sc.nextInt();
            }
        }

        System.out.print("Digite um número para procurar na matriz: ");
        int num = sc.nextInt();

        for (int i = 0; i < N; i++) {
            for (int j = 0; j < M; j++) {
                if (mat[i][j] == num) {
                    System.out.println("Positioni: [" + i + ", " + j + "]");
                    if (i - 1 != -1) {
                        System.out.println("Up: " + mat[i - 1][j]);
                    }
                    if (j + 1 != M) {
                        System.out.println("Right: " + mat[i][j + 1]);
                    }
                    if (i + 1 != N) {
                        System.out.println("Down: " + mat[i + 1][j]);
                    }
                    if (j - 1 != -1) {
                        System.out.println("Left: " + mat[i][j - 1]);
                    }
                    System.out.println("------------------");
                }
            }
        }

        System.out.println(Arrays.deepToString(mat));

        sc.close();
    }


}