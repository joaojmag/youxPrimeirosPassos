const p_array = document.getElementById('array')
const btnReduzir = document.getElementById('btnReduzir')
const resultado = document.getElementById('resultado')

const elementos_array = [1, 2, 3, 4, 5]
// const elementos_array = ['HTML', 'JavaScript', 'css']
p_array.innerHTML = '[' + elementos_array + ']'
let ant = []
let atu = []
let dobro = []

btnReduzir.addEventListener('click', (evt) => {
    resultado.innerHTML = elementos_array.reduce((anterior, atual, pos) => {
        ant.push(anterior)
        atu.push(atual)
        dobro.push(atual * 2)
        return atual + anterior
    })
    resultado.innerHTML += '<br/>V. Anterior ' + ant + '<br/> V. Atual ' + atu + '<br/> V. Dobro ' + dobro
})