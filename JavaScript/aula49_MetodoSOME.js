const p_array = document.getElementById('array')
const txt_pesquisar = document.getElementById('txt_pesquisar')
const btnVerificar = document.getElementById('btnVerificar')
const resultado = document.getElementById('resultado')

const elementos_array = [10, 17, 7]
// const elementos_array = ['HTML', 'JavaScript', 'css']
p_array.innerHTML = '[' + elementos_array + ']'

let ind = 0
btnVerificar.addEventListener('click', (evt) => {
    const rest = elementos_array.some((e, i, arr) => { // some verifica se pelo menos 1 esta de acordo
        if (e > 18) {
            resultado.innerHTML = 'Array não conforme na posição ' + i
        }
        ind = i
        return e == 17
    })
    if (rest)
        resultado.innerHTML = `OK indice ${ind}`
    else
        resultado.innerHTML = 'Valor não encontrado'
    console.log('rest :>> ', rest);
})