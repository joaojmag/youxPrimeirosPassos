package aula104_116;

import java.time.Duration;
import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;

public class CalculoComDataHora {
    public static void main(String[] args) {

        LocalDate d04 = LocalDate.parse("2022-07-20");
        LocalDateTime d05 = LocalDateTime.parse("2022-07-20T11:30:26");
        Instant d06 = Instant.parse("2022-07-20T11:30:26Z");

        LocalDate semanaPassada = d04.minusDays(7);
        LocalDate proximaSemana = d04.plusDays(7);

        System.out.println("semanaPassada = " + semanaPassada);
        System.out.println("d04 = " + d04);
        System.out.println("proximaSemana = " + proximaSemana);

        LocalDateTime semanaPassadaTempo = d05.minusDays(7);
        LocalDateTime proximaSemanaTempo = d05.plusDays(7);

        System.out.println("semanaPassadaTempo = " + semanaPassadaTempo);
        System.out.println("d05 = " + d05);
        System.out.println("proximaSemanaTempo = " + proximaSemanaTempo);

        Instant semanaPassadaInstante = d06.minus(7, ChronoUnit.DAYS);
        Instant proximaSemanaTempoInstante = d06.plus(7, ChronoUnit.DAYS);

        System.out.println("semanaPassadaInstante = " + semanaPassadaInstante);
        System.out.println("proximaSemanaTempoInstante = " + proximaSemanaTempoInstante);

        Duration t1 = Duration.between(semanaPassadaTempo, d05);
        Duration t2 = Duration.between(semanaPassada.atStartOfDay(), d04.atStartOfDay());
        Duration t3 = Duration.between(semanaPassadaInstante, d06);
        Duration t4 = Duration.between(d06, semanaPassadaInstante);

        System.out.println("t1 dias = " + t1.toDays());
        System.out.println("t2 dias = " + t2.toDays());
        System.out.println("t3 dias = " + t3.toDays());
        System.out.println("t4 dias = " + t4.toDays());
    }
}