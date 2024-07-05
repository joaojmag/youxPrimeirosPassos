package org.example.rest;

import lombok.Data;
import lombok.Getter;

import java.util.Arrays;
import java.util.List;

@Data
public class ApiErrors {

    @Getter
    private List<String> errors;

    public ApiErrors(String mensagemErrors) {
        this.errors = Arrays.asList(mensagemErrors);
    }
}
