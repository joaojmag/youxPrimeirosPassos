const caixa1 = document.querySelector('#caixa1')
const caixa2 = document.querySelector('#caixa2')
const btn1 = document.querySelector('#btn_copiar')
const btn2 = document.querySelector('#btn_voltar')
const todoCursos = [...document.querySelectorAll('.curso')]

todoCursos.map(el => {
    el.addEventListener('click', (evt) => {
        const curso = evt.target
        console.log(curso);
        curso.classList.toggle('seleciona') //toggle verifica se tem, não tem coloca,tem tira
        curso.classList.toggle('c1') //toggle verifica se tem, não tem coloca,tem tira
        curso.classList.toggle('c2') //toggle verifica se tem, não tem coloca,tem tira
        console.log(curso);
    })
})

btn1.addEventListener('click', () => {
    const cursoSelecionar = [...document.querySelectorAll('.seleciona')]
    console.log(cursoSelecionar);
    cursoSelecionar.map(el => {
        caixa2.appendChild(el)
    })
})

btn2.addEventListener('click', () => {
    const cursoNaoSelecionar = [...document.querySelectorAll('.c1')]
    console.log(cursoNaoSelecionar);
    cursoNaoSelecionar.map(el => {
        caixa1.appendChild(el)
    })
})