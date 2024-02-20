import React, { Component } from "react";
class Membro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: props.nome
        }
        this.entrar = this.entrar.bind(this)
    }

    entrar(_nome) {
        this.setState({ nome: _nome })
    }


    render() {
        return (
            <div>
                <h1>Bem vindo {this.state.nome}</h1>
                <button onClick={() => this.entrar('João Marcelo')} style={{ cursor: 'pointer' }} >Entrar como João</button>
                <button onClick={() => this.setState({ nome: '' })}>Sair</button>
            </div>
        );
    }
}

export default Membro;

// para usar rode o comando npm install para baixar a pasta node_modulos