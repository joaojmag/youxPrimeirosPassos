import React, { Component } from "react";
import './estilo.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoFrase: ''
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);
    this.frases = ['frase 1', 'frase 2', 'frase 3', 'frase 4', 'frase 5', 'frase 6', 'frase 7'];
  }

  quebraBiscoito() {
    let estado = this.state;
    let numerAleatorio = Math.floor(Math.random() * this.frases.length);
    estado.textoFrase = '" ' + this.frases[numerAleatorio] + ' "';
    this.setState(estado)
  }

  render() {
    return (
      <div className="container">
        <img src={require('./assets/biscoito.png')} className="img" />
        <Botao nome="Abrir Biscoito" acaobtn={this.quebraBiscoito} />
        <h3 className="textoFrase">{this.state.textoFrase}</h3>
      </div>
    );
  }
}

class Botao extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.acaobtn}>{this.props.nome}</button>
      </div>
    );
  }
}

export default App;