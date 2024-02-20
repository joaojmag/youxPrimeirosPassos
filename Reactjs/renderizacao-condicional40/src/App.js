// import React, { Component } from "react";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       status: 1
//     };
//   }

//   render() {
//     return (
//       <div>
//         {
//           this.state.status === 1 && <h1>Bem vindo ao sistema!</h1>
//         }
//         <div><h2>Curso React JS</h2></div>
//       </div>
//     );
//   }
// }

// export default App;
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true
    };

    this.sair = this.sair.bind(this);
    this.entrar = this.entrar.bind(this);
  }

  sair = () => {
    this.setState({ status: false })
  }

  entrar = () => {
    this.setState({ status: true })
  }


  render() {
    return (
      <div>
        {this.state.status ?
          <div>
            <h2>Bem vindo ao sistema!</h2>
            <button onClick={this.sair} style={{ cursor: "pointer" }}>Sair</button>
          </div> :
          <div>
            <h2>Olá visitante faça o login</h2>
            <button onClick={this.entrar} style={{ cursor: "pointer" }}>Entrar</button>
          </div>
        }
      </div>
    );
  }
}

export default App;