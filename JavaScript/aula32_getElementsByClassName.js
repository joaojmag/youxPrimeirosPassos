const todosCursos = [...document.getElementsByClassName('curso')];
const todosC1 = [...document.getElementsByClassName('c1')];
const todosC2 = [...document.getElementsByClassName('c2')];
const especial = document.getElementsByClassName('curso')[0];


console.log(todosCursos);
console.log(todosC1);
console.log(todosC2);
console.log(especial);


function mudarCor() {
    todosCursos.map((el) => {
        el.classList.add('destaque')
    })
}

todosC2.map((el) => {
    el.classList.add('destaque')
})