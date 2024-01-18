/* 
0 Obter o númeor de telefone a aparti de seu ID
1 Obter  o número do usuário a partir de seu ID
2 Obter o endereço do usuário pelo seu Id
 */

function obterUsuario(callback) {
    setTimeout(function () {
        return callback(null, {
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        })
    }, 1000)

}

function obterTelefone(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            telefone: '1199002',
            ddd: 11
        })
    }, 2000)

}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'dos bobos',
            numero: 0
        })
    }, 2000);

}

function resolverUsuario(erro, usuario) {
    console.log('usuário', usuario);
}

obterUsuario(function resolverUsuario(error, usuario) {
    // nll || "" || 0 === false
    if (error) {
        console.error('Deu ruim em USUARIO', error)
        return;
    }
    obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
        if (error1) {
            console.error('Deu ruim em Telefone', error)
            return;
        }

        obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
            if (error2) {
                console.error('Deu ruim em Telefone', error)
                return;
            }
            console.log(`
            Nome: ${usuario.nome},
            Endereço: ${endereco.rua}, ${endereco.numero}
            Telefone: (${telefone.ddd}) ${telefone.telefone}        
        `)

        })
    })
})
//const telefone = obterTelefone(usuario.id)

//console.log('telefone', telefone)