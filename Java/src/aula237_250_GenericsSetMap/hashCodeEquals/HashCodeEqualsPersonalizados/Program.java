package aula237_250_GenericsSetMap.hashCodeEquals.HashCodeEqualsPersonalizados;

public class Program {

    public static void main(String[] args) {

        Client c1 = new Client("Maria", "maria@gmail.com");
        Client c2 = new Client("Joao", "joao@gmail.com");

        String s1 = "Teste";
        String s2 = "Teste";

        String s3 = new String("teste");
        String s4 = new String("teste");

        System.out.println(c1.hashCode());
        System.out.println(c2.hashCode());
        System.out.println(c1.equals(c2));
        System.out.println(c1 == c2);
        System.out.println(s1 == s2);
        System.out.println(s3 == s4);

    }
}