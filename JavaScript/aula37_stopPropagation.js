const caixa1 = document.querySelector('#caixa1')
const btn_c1 = document.querySelector('#c1')
const pararTodos = [...document.querySelectorAll('.curso')]

caixa1.addEventListener('click', (evt) => {
    console.log(evt.target);
})

// btn_c1.addEventListener('click', (evt) => {
//     evt.stopPropagation()
//     // console.log('clicou');
// })


pararTodos.map(el => {
    el.addEventListener('click', evt => {
        evt.stopPropagation()
    })
})
// para fazer em todos podemos fazer assim

