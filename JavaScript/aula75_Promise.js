const numero = document.getElementById('numero')

let promessa = new Promise((resolve, reject) => {
    let resultado = true
    let tempo = 3000
    setTimeout(() => {
        if (resultado)
            resolve('Deu tudo certo')
        else
            reject('Deu tudo errado')
    }, tempo)
})

promessa.then((retorno) => {
    numero.innerHTML = retorno
    numero.classList.remove('erro')
    numero.classList.add('ok')
})
promessa.catch((retorno) => {
    numero.innerHTML = retorno
    numero.classList.add('erro')
    numero.classList.remove('ok')
})

numero.innerHTML = 'Procesando...'