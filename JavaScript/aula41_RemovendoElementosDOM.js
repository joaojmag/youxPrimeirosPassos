const caixa1 = document.querySelector('#caixa1')
const btc_c = [...document.querySelectorAll('.curso')]
const c1_2 = document.querySelector('#c1_2')
const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'MySQL', 'ReactNative']

cursos.map((el, index) => {
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id', `c${index + 1}`)
    novoElemento.setAttribute('class', 'curso c1')
    novoElemento.innerHTML = el
    const btn_lixeira = document.createElement('img')
    btn_lixeira.setAttribute('src', './lixeira-de-reciclagem.png')
    btn_lixeira.setAttribute('class', 'btn_licehira')
    btn_lixeira.addEventListener('click', (evt) => {
        console.log(evt.target.parentNode);
        caixa1.removeChild(evt.target.parentNode)
    })

    novoElemento.appendChild(btn_lixeira)
    caixa1.appendChild(novoElemento)
})
