package aula167_178.exerTryCatch.modal.exceptions;

public class DomainException extends Exception { //RuntimeException não te obriga a tratar a execeção
    private static final long serialVersionUID = 1L;

    public DomainException(String msg){
        super(msg);
    }
}