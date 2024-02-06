const todosDiv = [...document.getElementsByTagName('div')];
const todosCursos = [...document.getElementsByClassName('curso')];
const todosC1 = [...document.getElementsByClassName('c1')];
const todosC2 = [...document.getElementsByClassName('c2')];
const especial = document.getElementById('c1');


const query_div = document.querySelector('div') // par dois elementos diferentes é assim 
const queryAll_div = [...document.querySelectorAll('div,p')] // elementos do html
const queryAll_divClasse = [...document.querySelectorAll('div[class]')] // fazer um filtro div com o classe
const queryAll_divP = [...document.querySelectorAll('div > p')] // fazer um filtro div com o classe
const queryAll_classeCurso = [...document.querySelectorAll('.curso')] // classes do html usando o .
const queryAll_classec1 = [...document.querySelectorAll('.c1,p')]
const queryAll_classec2 = [...document.querySelectorAll('.c2')]
const queryAll_ID = document.querySelector('#c1')
const queryAll_IdAll = [...document.querySelectorAll('#c1,p')][0].outerHTML

console.log(query_div);
console.log(queryAll_div);
console.log(queryAll_classeCurso);
console.log(queryAll_classec1);
console.log(queryAll_classec2);
console.log(queryAll_ID);
console.log(queryAll_IdAll);
console.log(queryAll_divClasse)
console.log(queryAll_divP)


// console.log(todosDiv);
// console.log(todosCursos);
// console.log(todosC1);
// console.log(todosC2);
// console.log(especial);



// todosC2.map((el) => {
//     el.classList.add('destaque')
// })