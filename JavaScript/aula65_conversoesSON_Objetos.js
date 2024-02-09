const pessoa = {
    nome: 'Joao',
    canal: 'JMAG',
    curso: 'Java',
    aulas: {
        aula01: 'Introdução',
        aula02: 'variáveis',
        aula03: 'Condicional'
    }
}
const pessoas1 = '{"nome":"Joao","canal":"JMAG","curso":"Java","aulas":{"aula01":"Introdução","aula02":"variáveis","aula03":"Condicional"}}'


const s_jsonPessoa = JSON.stringify(pessoa)

console.log(s_jsonPessoa);
console.log('object :>> ', JSON.parse(pessoas1));