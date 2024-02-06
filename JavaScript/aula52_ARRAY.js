const caixa = document.getElementById('caixa')

let cursos = ['HTML', 'CSS', 'JavaScript']

cursos.map(e => {
    let p = document.createElement('p');
    p.innerHTML = e;
    caixa.appendChild(p)
})

console.log(cursos);