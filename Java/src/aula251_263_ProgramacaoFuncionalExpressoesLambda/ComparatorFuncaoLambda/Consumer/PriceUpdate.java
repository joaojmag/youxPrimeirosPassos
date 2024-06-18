package aula251_263_ProgramacaoFuncionalExpressoesLambda.ComparatorFuncaoLambda.Consumer;

import java.util.function.Consumer;

public class PriceUpdate implements Consumer<Product> {


    @Override
    public void accept(Product p) {
        p.setPrice(p.getPrice() * 1.1);
    }
}