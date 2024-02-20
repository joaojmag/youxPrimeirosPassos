import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: {
        nome: '',
        email: '',
        senha: '',
        sexo: ''
      }
    }
    this.dadosForm = this.dadosForm.bind(this)
  }

  dadosForm(e) {
    let deform = this.state.from;
    deform['e.target.name'] = e.target.value;
    this.setState({ from: deform })
  }


  render() {
    return (
      <div>
        <h2>Login</h2>
        Nome:
        <input type="text" name="nome" value={this.state.from.nome} onChange={this.dadosForm}></input><br />
        Email:
        <input type="email" name="email" value={this.state.from.email} onChange={this.dadosForm}></input><br />
        Senha:
        <input type="password" name="senha" value={this.state.from.senha} onChange={(e) => this.setState({ senha: e.target.value })}></input> <br />
        Sexo:
        <select name='sexo' value={this.state.from.sexo} onChange={this.dadosForm}>
          <option value='masculino'>Masculino</option>
          <option value='feminino'>Feminino</option>
        </select>

        <h3>{this.state.from.nome}</h3>
        <h3>{this.state.from.email}</h3>
        <h3>{this.state.from.senha}</h3>
        <h3>{this.state.from.sexo}</h3>
      </div>
    );
  }

}

export default App;
