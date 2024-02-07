const caixa = document.getElementById('caixa')

let cores = ['azul', 'verde', 'vermelho', ['amarelo', 'roxo', 'branco']]
let cursos = ['HTML', 'CSS', 'JavaScript', cores[3][2]]

// console.log('cursos :>> ', cursos[0]);
// add no final e remove no final
/* cursos.push('Python')
cursos.push('C++')
cursos.pop() */

//add no inicio e remove no inicio
/* cursos.unshift('Ola')
cursos.unshift('Tudo')
cursos.shift() */

cursos.map(e => {
    let p = document.createElement('p');
    p.innerHTML = e;
    caixa.appendChild(p)
})

console.log(cursos);