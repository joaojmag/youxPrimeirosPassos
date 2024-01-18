const codProdutos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const totalDeProEstoque = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const cliente = [
    {
        codCli: 1,
        codPro: 1,
        quant: 23,
    },
    {
        codCli: 2,
        codPro: 2,
        quant: 3,
    },
    {
        codCli: 0,
        codPro: 3,
        quant: 14,
    },
    {
        codCli: 4,
        codPro: 4,
        quant: 23,
    },
    {
        codCli: 5,
        codPro: 5,
        quant: 45,
    },
    {
        codCli: 6,
        codPro: 6,
        quant: 23,
    },
    {
        codCli: 7,
        codPro: 60,
        quant: 23,
    },
    {
        codCli: 8,
        codPro: 60,
        quant: 203,
    },
    {
        codCli: 9,
        codPro: 10,
        quant: 89,
    },
    {
        codCli: 0,
        codPro: 0,
        quant: 0,
    },
];

let prodNaoExiste = 0;
let estoqueInuficiente = 0;

function verificaCodClient() {
    cliente.forEach((element, index) => {
        if (element.codCli !== 0) {
            verificarCodProd(element.codPro, index);
            //console.log('Index', element.codCli, index)
        } else {
            //console.log('Fim do códido');
        }

    });
}

function verificarCodProd(valor, indice) {
    if (codProdutos.includes(valor)) {
        verificarEstoque(indice);
        //console.log('Index ', indice, 'Valor ', valor);
    } else {
        prodNaoExiste += 1;
        //console.log('não tem', prodNaoExiste);

    }
}

function verificarEstoque(index) {
    if (cliente[index].quant <= totalDeProEstoque[cliente[index].codPro - 1]) {
        // Altera o valor no array totalDeProEstoque
        totalDeProEstoque[cliente[index].codPro - 1] = totalDeProEstoque[cliente[index].codPro - 1] - cliente[index].quant
        //console.log('valor estoque ', totalDeProEstoque[cliente[index].codPro - 1])
    } else {
        estoqueInuficiente += 1;
    }
}


verificaCodClient();
console.log('==================')
for (let i in codProdutos) {
    console.log(`código: ${codProdutos[i]} | estoque: ${totalDeProEstoque[i]}`)
}

console.log('Não realizadopor código errado: ', prodNaoExiste)
console.log('Não realizadopor falta no estoque: ', estoqueInuficiente)

