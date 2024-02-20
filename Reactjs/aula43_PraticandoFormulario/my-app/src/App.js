import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
      senha: '',
      error: ''
    }
    this.cadastrar = this.cadastrar.bind(this);
  }

  cadastrar(evento) {
    const { nome, email, senha } = this.state;
    if (nome !== '' && email !== '' && senha !== '') {
      alert(`Nome: ${nome} \nE-mail: ${email} \nSenha: ${senha}`)
    } else {
      this.setState({ error: 'Ops! Pare que está incompleto' })
    }

    evento.preventDefault() //para não atualizar a página
  }

  render() {
    return (
      <div>
        <h1>Novo usuário</h1>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.cadastrar}>
          <label>Nome: </label>
          <input type="text" value={this.state.nome} onChange={(e) => this.setState({ nome: e.target.value })}></input> <br />
          <label>E-mail: </label>
          <input type="email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })}></input> <br />
          <label>Senha: </label>
          <input type="password" value={this.state.senha} onChange={(e) => this.setState({ senha: e.target.value })}></input><br />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    );
  }
}

export default App;
