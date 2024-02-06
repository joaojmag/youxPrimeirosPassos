const caixa1 = document.querySelector('#caixa1')
const btc_c = [...document.querySelectorAll('.curso')]
const c1_2 = document.querySelector('#c1_2')
const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'MySQL', 'ReactNative']

cursos.map((el, index) => {
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id', `c${index + 1}`)
    novoElemento.setAttribute('class', 'curso c1')
    novoElemento.innerHTML = el
    caixa1.appendChild(novoElemento)
})

// const novoElemento = document.createElement('div')
// novoElemento.setAttribute('id', 'c7')
// novoElemento.setAttribute('class', 'curso c1')
// novoElemento.innerHTML = 'ReactNative'
// caixa1.appendChild(novoElemento)