const caixaCursos = document.querySelector('#caixaCursos')
const btc_c = [...document.querySelectorAll('.curso')]
const c1_2 = document.querySelector('#c1_2')
const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'MySQL', 'ReactNative']
const btnCursoSelecionado = document.getElementById('btnCursoSelecionado')
const btnRemoverCurso = document.getElementById('btnRemoverCurso')
const btnAdicionarNovoCursoAntes = document.getElementById('btnAdicionarNovoCursoAntes')
const btnAdicionarNovoCursoDepois = document.getElementById('btnAdicionarNovoCursoDepois')
const nomeCurso = document.getElementById('nomeCurso')
let indice = 0;

const tirarSelecionado = () => {
    const cursoSelecioandos = [...document.querySelectorAll('.selecionado')]
    cursoSelecioandos.map(el => {
        el.classList.remove('selecionado')
    })
}

const criarNovoCurso = (curso) => {
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id', 'c' + indice)
    novoElemento.setAttribute('class', 'curso c1')
    novoElemento.innerHTML = curso
    novoElemento.addEventListener('click', evt => {
        tirarSelecionado()
        evt.target.classList.toggle('selecionado')
    })

    // const comandos = document.createElement('div')
    // comandos.setAttribute('class', 'comandos')

    // const rb = document.createElement('input')
    // rb.setAttribute('type', 'radio')
    // rb.setAttribute('name', 'rb_curso')

    // // comandos.appendChild(rb)

    // novoElemento.appendChild(comandos)

    return novoElemento
}

cursos.map((el, chave) => {
    const novoElemento = criarNovoCurso(el)
    caixaCursos.appendChild(novoElemento)
    indice++
})

const cursoSelecioando = () => {
    const cursoSelecioandos = [...document.querySelectorAll('.selecionado')]
    return cursoSelecioandos[0];
}

btnCursoSelecionado.addEventListener('click', () => {
    try {
        alert('Curso selecionado: ' + cursoSelecioando().innerHTML)

    } catch {
        alert('Selecione um curso')
    }
})

btnRemoverCurso.addEventListener('click', () => {
    const cs = cursoSelecioando()
    if (cs != undefined) {
        cs.remove()
        console.log(cursoSelecioando);

    } else {
        alert('Selecione um curso')
    }
})

btnAdicionarNovoCursoAntes.addEventListener('click', evt => {
    if (nomeCurso.value != '') {
        try {
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, cursoSelecioando())
        } catch {
            alert('Selecione um curso')
        }
    } else
        alert('Escreva no nomde do curso')
})

btnAdicionarNovoCursoDepois.addEventListener('click', evt => {
    if (nomeCurso.value != '') {
        try {
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, cursoSelecioando().nextSibling)
        } catch {
            alert('Selecione um curso')
        }
    } else
        alert('Escreva no nomde do curso')
})