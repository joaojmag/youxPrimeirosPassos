package aula223_236_Interfaces.ExercicioFixacaoInterface.application;

import aula223_236_Interfaces.ExercicioFixacaoInterface.model.entities.Contract;
import aula223_236_Interfaces.ExercicioFixacaoInterface.model.entities.Installment;
import aula223_236_Interfaces.ExercicioFixacaoInterface.model.service.ContractService;
import aula223_236_Interfaces.ExercicioFixacaoInterface.model.service.PaypalService;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;
import java.util.Scanner;

public class Program {
    public static void main(String[] args) {

        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
        Locale.setDefault(Locale.US);

        try (Scanner sc = new Scanner(System.in)) {
            System.out.println("Entre os dados do contrato: ");
            System.out.print("Numero: ");
            int num = sc.nextInt();
            System.out.print("Data (dd/MM/yyyy): ");
            Date data = sdf.parse(sc.next());
            System.out.print("Valor do contrato: ");
            double valor = sc.nextDouble();
            System.out.print("Entre com o numero de parcelas: ");
            int parcela = sc.nextInt();

            Contract contract = new Contract(num, data, valor);
            ContractService service = new ContractService(new PaypalService());
            service.processContract(contract, parcela);

            System.out.println("Parcelas:");
            for (Installment i : contract.getInstallments()) {
                System.out.println(i);
            }


        } catch (ParseException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
