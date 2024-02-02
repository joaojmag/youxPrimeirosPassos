// const c1 = document.getElementById('c1') //ou 
// const c1 = document.querySelector('#c1') //ou 
const cursos = [...document.querySelectorAll('.curso')]

// const alertar = () => alert('opaaa')

cursos.map(e => {
    e.addEventListener("click", (event) => {
        const el = event.target;
        el.classList.add('destaque')
        console.log(el.innerHTML + ' Foi clicado');
        console.log(el.id + ' Foi clicado');
    
    })
})

// c1.addEventListener("click", (event) => {
//     const el = event.target;
//     el.classList.add('destaque')

// })