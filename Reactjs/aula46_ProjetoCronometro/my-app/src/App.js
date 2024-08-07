import React, { Component } from "react"
import './style.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      botao: 'VAI'
    };
    this.timer = null;
    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this)
  }

  vai() {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
      this.setState({ botao: 'VAI' })
    } else {
      this.timer = setInterval(() => {
        let estado = this.state;
        estado.numero += 0.1;
        this.setState(estado);
        this.setState({ botao: 'PARAR' })
      }, 100)
    }
  }

  limpar() {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    }
    let estado = this.state;
    estado.numero = 0;
    estado.botao = 'VAI'
    this.setState(estado);
  }

  render() {
    return (
      <div className="container">
        <img src={require('./assets/cronometro.png')} className="img" />
        <a className="timer">{this.state.numero.toFixed(1)}</a>
        <div className="areaBtn" >
          <a className="botao" onClick={this.vai} >{this.state.botao}</a>
          <a className="botao" onClick={this.limpar}>LIMPAR</a>
        </div>
      </div>
    );
  }
}

export default App;