package aula223_236_Interfaces.ExercicioFixacaoInterface.model.service;

import aula223_236_Interfaces.ExercicioFixacaoInterface.model.entities.Contract;
import aula223_236_Interfaces.ExercicioFixacaoInterface.model.entities.Installment;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;


public class ContractService {

    private final OnlinePaymentService onlinePaymentService;

    public ContractService(OnlinePaymentService onlinePaymentService) {
        this.onlinePaymentService = onlinePaymentService;
    }

    public void processContract(Contract contract, Integer months) {
        double parcelas = contract.getTotalValue() / months;
        for (int i = 1; i <= months; i++) {
            double valorjuros = onlinePaymentService.interest(parcelas, i);
            double valorTaxaEJuros = onlinePaymentService.paymentFee(valorjuros);

            LocalDate localDate = contract.getDate().toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
            Date prestacoes = Date.from(localDate.plusMonths(i).atStartOfDay(ZoneId.systemDefault()).toInstant());

            contract.getInstallments().add(new Installment(prestacoes, valorTaxaEJuros));


        }
    }

}
