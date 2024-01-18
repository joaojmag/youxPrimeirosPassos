/* const v1 = [2, 4]//, 3, 2, 1, 7, 5];
const v2 = [0, 3, 2, -1];

function somatoria() {
    const novoVetor = v1.filter(() => {
        const retorna = v2.map((callback, index) => {
            return index;
        });
        return retorna !== 0;

    })
        //.reduce((valor1, valor2) => valor1 * valor2)
    console.log(novoVetor)

}

somatoria(); */
const v1 = [2, 4, 3, 2, 1, 7, 5];
const v2 = [2, 2, 2, -1];

function somatoria() {
    let resultado = 1;
    v2.forEach((numero) => {
        if (numero < 0) {
            return
        } else {
            resultado *= v1[numero]
        }
    })

    console.log(resultado)

}

somatoria();