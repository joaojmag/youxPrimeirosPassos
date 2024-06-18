package aula251_263_ProgramacaoFuncionalExpressoesLambda.ComparatorFuncaoLambda.Function;

import java.util.function.Function;

public class UpperCaseName implements Function<Product, String> {

    @Override
    public String apply(Product product) {
        return product.getName().toUpperCase();
    }
}