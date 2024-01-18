const service = require('./service');

Array.prototype.meuMap = function (callback) {
    const novoArrayMapeado = [];
    for (let indice = 0; indice <=this.length -1; indice++) {
        const resultado = callback(this[indice], indice);
        novoArrayMapeado.push(resultado);
    }
    return novoArrayMapeado;
}

async function main() {
    try {
        const results = await service.obterPessoas(`a`);
        /* const names = []
        results.results.forEach(function (item){
            names.push(item.name)
        }); */
        /* const names = results.results.map(function(pessoas){
            return pessoas.name
        }) */
        const names = results.results.map((pessoas, index) => `[${index}]  ${pessoas.name}`);
        /* const names = results.results.meuMap(function (pessoas, indice) {
            return `[${indice}]${pessoas.name}`
        } ); */
        console.log('Nomes: ',names);

    } catch (error) {
        console.error(`Deu erro aqui`, error);
    }

}
main();