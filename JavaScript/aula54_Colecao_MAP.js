const caixa = document.querySelector('#caixa')

let mapa = new Map

mapa.set('escola', 'EEHJB')
mapa.set(10, 'Joao')
mapa.set(1, 1000)
mapa.set('canal', 55)

mapa.delete(1)
console.log(mapa);

let valor = 10;
let texto =''
if (mapa.has(valor)) {
    texto = 'A chave existe na coleção'
} else {
    texto = 'A chave não existe'
}
texto += '<br/> O tamanho da coleção é ' + mapa.size
caixa.innerHTML = texto
