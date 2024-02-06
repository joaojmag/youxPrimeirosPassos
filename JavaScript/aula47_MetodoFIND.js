const p_array = document.getElementById('array')
const txt_pesquisar = document.getElementById('txt_pesquisar')
const btnPesquisar = document.getElementById('btnPesquisar')
const resultado = document.getElementById('resultado')

// const elementos_array = [10, 48, 7, 50, 5, 8, 96, 2]
const elementos_array = ['HTML', 'JavaScript', 'css']

p_array.innerHTML = '[' + elementos_array + ']'

btnPesquisar.addEventListener('click', (elt) => {
    const rest = elementos_array.find((e, i, arr) => {
        resultado.innerHTML = 'Valor não encontrado'
        if (e.toLocaleUpperCase() == txt_pesquisar.value.toLocaleUpperCase()) {
            resultado.innerHTML = 'Valor encontrado: ' + e + ' na posição ' + i;
            return e
        }
    })
    console.log('rest :>> ', rest);
})