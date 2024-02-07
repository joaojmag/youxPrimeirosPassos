const caixa = document.getElementById('caixa')

const carros = ['Polo', 'Celta', 'Opala']
const nome = 'João'
const sobreNome = 'Garcia'

// caixa.innerHTML = `Seu nome: ${nome}<br/> e o seu sobrenome: ${sobreNome}`

let ul = `<ul>`
carros.map(el => {
    ul += `<li>${el}</li>`
})
ul += `</ul>`

caixa.innerHTML = ul