package aula237_250_GenericsSetMap.Map;

import java.util.HashMap;
import java.util.Map;

public class Demo1 {
    public static void main(String[] args) {

        Map<String, String> cookies = new HashMap<>();

        cookies.put("username", "Maria");
        cookies.put("email", "maria@gmail.com");
        cookies.put("phone", "992222");

        System.out.println("=======================");
        System.out.println("ALL COOKIES:");
        for (String key : cookies.keySet()) {
            System.out.println(key + ": " + cookies.get(key));
        }
        cookies.remove("email");
        cookies.put("phone", "993333");

        System.out.println("=======================");
        System.out.println("Contains 'phone' key: " + cookies.containsKey("phone"));
        System.out.println("Phone number: " + cookies.get("phone"));
        System.out.println("E-mail: " + cookies.get("email"));
        System.out.println("Size: " + cookies.size());

        System.out.println("=======================");
        System.out.println("ALL COOKIES:");
        for (String key : cookies.keySet()) {
            System.out.println(key + ": " + cookies.get(key));
        }
    }
}
