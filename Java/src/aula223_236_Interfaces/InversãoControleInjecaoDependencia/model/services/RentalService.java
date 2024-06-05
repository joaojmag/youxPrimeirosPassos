package aula223_236_Interfaces.InversãoControleInjecaoDependencia.model.services;

import aula223_236_Interfaces.introduzindo_assunto_prob1.model.entities.CarRental;
import aula223_236_Interfaces.introduzindo_assunto_prob1.model.entities.Invoice;

import java.time.Duration;

public class RentalService {

    private Double pricePerHour;
    private Double priceperDay;

    private TaxService brazilTaxService;

    public RentalService(Double pricePerHour, Double priceperDay, TaxService brazilTaxService) {
        this.pricePerHour = pricePerHour;
        this.priceperDay = priceperDay;
        this.brazilTaxService = brazilTaxService;
    }

    public void processInvoice(CarRental carRental) {

        double minutes = Duration.between(carRental.getStart(), carRental.getFisish()).toMinutes();
        double hours = minutes / 60.0;

        double basicaPayment;
        if (hours <= 12.0) {
            basicaPayment = pricePerHour * Math.ceil(hours);
        } else {
            basicaPayment = priceperDay * Math.ceil(hours / 24.0);
        }

        double tax = brazilTaxService.tax(basicaPayment);

        carRental.setInvoice(new Invoice(basicaPayment, tax));
    }

}
