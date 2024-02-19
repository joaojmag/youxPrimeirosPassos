import React, { Component } from "react";
class Membro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: this.props.nome
        }
        this.entrar = this.entrar.bind(this)
    }

    entrar() {
        this.setState({ nome: 'João' })
    }


    render() {
        return (
            <div>
                <h1>Bem vindo {this.state.nome}</h1>
                <button onClick={this.entrar}>Entrar como João</button>
                <button onClick={() => this.setState({ nome: '' })}>Sair</button>
            </div>
        );
    }
}

export default Membro;