const caixaCursos = document.querySelector('#caixaCursos')
const btc_c = [...document.querySelectorAll('.curso')]
const c1_2 = document.querySelector('#c1_2')
const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'MySQL', 'ReactNative']
const btnCursoSelecionado = document.getElementById('btnCursoSelecionado')
const btnRemoverCurso = document.getElementById('btnRemoverCurso')


cursos.map((el, chave) => {
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id', 'c' + chave)
    novoElemento.setAttribute('class', 'curso c1')
    novoElemento.innerHTML = el

    const comandos = document.createElement('div')
    comandos.setAttribute('class', 'comandos')

    const rb = document.createElement('input')
    rb.setAttribute('type', 'radio')
    rb.setAttribute('name', 'rb_curso')

    comandos.appendChild(rb)

    novoElemento.appendChild(comandos)

    caixaCursos.appendChild(novoElemento)

})

const radioSelecioando = () => {
    const todoRadios = [...document.querySelectorAll('input[type=radio]')];
    const radiosSelecionado = todoRadios.filter(elt => elt.checked);
    return radiosSelecionado[0];
}

btnCursoSelecionado.addEventListener('click', () => {
    const rs = radioSelecioando()
    try {
        const cursoSelecioando = rs.parentNode.previousSibling.textContent
        alert('Curso selecionado: ' + cursoSelecioando)

    } catch {
        alert('Selecione um curso')
    }
})

btnRemoverCurso.addEventListener('click', () => {
    const rs = radioSelecioando()
    if (rs != undefined) {
        const cursoSelecioando = rs.parentNode.parentNode
        cursoSelecioando.remove()
        console.log(cursoSelecioando);

    } else {
        alert('Selecione um curso')
    }
})