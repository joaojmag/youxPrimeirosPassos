// formatar: toLowerCase(), toUpperCase(), trim()
// recortar: substring(inicio),  substring(inicio, fim)
// substituir: replace(char, char), Replace(string, string)
// buscar: Indexof, LastIndexOf
// str.Split("")

package aula55_60;

public class trabalhandoComStrings {
    public static void main(String[] args) {
        String original = "abcd JASKSK ASKS    asa ODO bc  ";

        String s01 = original.toLowerCase();
        String s02 = original.toUpperCase();
        String s03 = original.trim(); //elimina espaços em branco nas laterais
        String s04 = original.substring(2);
        String s05 = original.substring(2, 9);
        String s06 = original.replace('a', 'z'); // substitui a por z
        String s07 = original.replace("abc", "xyz"); // substitui abc por xyz
        int i = original.indexOf("bc");
        int j = original.lastIndexOf("bc");

        System.out.println("Original: " + original);
        System.out.println("toLowerCase() " + s01);
        System.out.println("toUpperCase() " + s02);
        System.out.println("trim() " + s03);
        System.out.println("substring(2) " + s04);
        System.out.println("substring(2, 9) " + s05);
        System.out.println("replace('a', 'z') " + s06);
        System.out.println("replace(\"abc\", \"xyz\") " + s07);
        System.out.println("indexOf(\"bc\") " + i);
        System.out.println("lastIndexOf(\"bc\") " + j);


        // Operador split
        String s = "potato apple lemon";



        String[] vect = s.split(" ");
        String word1 = vect[0];
        String word2 = vect[1];
        String word3 = vect[2];

        System.out.println(word1);
        System.out.println(word2);
        System.out.println(word3);
    }
}
