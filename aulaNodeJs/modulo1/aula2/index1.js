/* 
0 Obter o númeor de telefone a aparti de seu ID
1 Obter  o número do usuário a partir de seu ID
2 Obter o endereço do usuário pelo seu Id
 */
// importamos um módulo interno do node.Js

const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario() {
    // quando der algum problema -> reject(ERRO)
    // quando sucess -> RESOLV
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(function () {
            //return reject(new Error('F total!'))

            return resolve({
                id: 1,
                nome: 'Aladin',
                dataNascimento: new Date()
            })
        }, 1000)
    })
}

function obterTelefone(idUsuario) {
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(() => {
            return resolve( {
                telefone: '1199002',
                ddd: 11
            })
        }, 2000)
    })

}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'dos bobos',
            numero: 0
        })
    }, 2000);

}

const usuarioPromise = obterUsuario()
//pra manipular com sucesso usamos a função .then
//para manipular erros, usamos o .catch
// usuario -> telefone -> telefone

usuarioPromise
    .then(function (usuario) {
        return obterTelefone(usuario.id)
            .then(function resolverTelefone(result) {
                return {
                    usuario: {
                        nome: usuario.nome,
                        id: usuario.id
                    },
                    telefone: result
                }

            })
    })
    .then(function (resultado) {
        const endereco = obterEnderecoAsync(resultado.usuario.id)
        return endereco.then(function resolverEndereco(result) {
            return {
                usuario: resultado.usuario,
                telefone: resultado.telefone,
                endereco: result
            }
        })

    })
    .then(function (resultado) {
        console.log(`
        Nome: ${resultado.usuario.nome}
        Emdereço: ${resultado.endereco.rua}, ${resultado.endereco.numero}
        Telefone:(${resultado.telefone.ddd}) ${resultado.telefone.telefone}
        `)
    })
    .catch(function (error) {
        console.error('Deu ruim', error)
    })



/* obterUsuario(function resolverUsuario(error, usuario) {
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
}) */


//const telefone = obterTelefone(usuario.id)

//console.log('telefone', telefone)