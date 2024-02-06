const p_array = document.getElementById('array')
const txt_pesquisar = document.getElementById('txt_pesquisar')
const btnVerificar = document.getElementById('btnVerificar')
const resultado = document.getElementById('resultado')

const elementos_array = [10, 17, 7]
// const elementos_array = ['HTML', 'JavaScript', 'css']
p_array.innerHTML = '[' + elementos_array + ']'

btnVerificar.addEventListener('click', (evt) => {
    const rest = elementos_array.every((e, i, arr) => { // every verifica se todos os elementos estão diacordo com a regra
        if (e > 18) {
            resultado.innerHTML = 'Array não conforme na posição ' + i
        }
        return e < 18
    })
    if (rest)
        resultado.innerHTML = 'OK'
    console.log('rest :>> ', rest);
})