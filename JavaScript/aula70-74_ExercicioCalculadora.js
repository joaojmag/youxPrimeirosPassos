const teclasNum = [...document.getElementsByClassName('num')]
const teclasOp = [...document.getElementsByClassName('op')]
const teclasRes = document.getElementsByClassName('res')
const dispay = document.querySelector('#dispay')
const ton = document.querySelector('#ton')
const tlimpar = document.querySelector('#tlimpar')
const tigual = document.querySelector('#tigual')
const tcpy = document.getElementById('tcpy')
// const teste = document.getElementById('teste')
const calc_aba = document.getElementById('calc_aba')
const calc = document.getElementById('calc')

let sinal = false
let descimal = false

teclasNum.forEach(el => {
    el.addEventListener('click', evt => {
        sinal = false

        if (evt.target.innerHTML == ',') {
            if (!descimal) {
                descimal = true
                if (dispay.innerHTML = '0') {
                    dispay.innerHTML = '0,'
                } else {
                    dispay.innerHTML += evt.target.innerHTML
                }
            }
        } else {
            if (dispay.innerHTML == '0') {
                dispay.innerHTML = ''
            }
            dispay.innerHTML += evt.target.innerHTML
        }
    })

})

teclasOp.forEach(el => {
    el.addEventListener('click', evt => {
        if (!sinal) {
            sinal = true
            if (dispay.innerHTML == '0') {
                dispay.innerHTML = ''
            }
            if (evt.target.innerHTML == 'x') {
                dispay.innerHTML += '*'
            } else {
                dispay.innerHTML += evt.target.innerHTML
            }
        }
    })

})

tlimpar.addEventListener('click', () => {
    sinal = false
    descimal = false
    dispay.innerHTML = '0'
})

tigual.addEventListener('click', evt => {
    sinal = false
    descimal = false
    const res = eval(dispay.innerHTML)
    dispay.innerHTML = res
})

/* tcpy.addEventListener('click', evt => {
    // navigator.clipboard.writeText(dispay.innerHTML)
    teste.select()
    teste.setSelectionRange(0, 999999999)
    navigator.clipboard.writeText(teste.value)
}) */

calc_aba.addEventListener('click', evt => {
    calc.classList.toggle('calc_exibir')
})