const caixa = document.querySelector('#caixa')

let musica = new Set(['musica 1', 'musica boa', 'musica10'])

musica.add('musica muito legal')
musica.add('musica 1')
musica.add('musica 1')
musica.add('musica10')


musica.delete('musica 1')
musica.clear()

musica.forEach(elt => {
    caixa.innerHTML += elt + '<br/>'
})

console.log(musica);