// 32. Entendendo props e component
/* import React from "react"
const Bemvindo = (props) => {
  return (
    <div>
      <h2>Bem Vindo(a) {props.nome}</h2>
      <h2>Tenho {props.idade} de idade</h2>
    </div>
  )
}


export default function App() {
  return (
    <div>
      <h1>Bem vindo</h1>
      <Bemvindo nome="joão" idade="10"/>
      <Bemvindo nome="Marcelo" idade="45"/>
    </div>
  )
} */
// ========================================================================================================
// 32. Entendendo props e component pt2
/* import React from "react"
const Equipe = (props) => {
  return (
    <div>
      <Sobre nome={props.username} idade={props.iade} cargo={props.cargo}/>
      <Social fb={props.facebook}/>
      <hr />
    </div>
  );
}

const Sobre = (props) => {
  return (<div>
    <h2>Olá sou o(a) {props.username}</h2>
    <h2>Tenho {props.idade} de idade</h2>
    <h2>Meu cargo é {props.cargo} </h2>
  </div>)
}

const Social = (props) => {
  return (
    <div>
      <a href={props.fb}>Facebook </a>
      <a>TouTube </a>
      <a>Linkedin </a>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h1>Conheça nossa equipe</h1>
      <Equipe nome="Joao" idade='23' cargo='Dev' facebook='https://facebook.com'/>
      <Equipe nome="Marcelo" idade='30' cargo='Dev' facebook='https://facebook.com'/>
      <Equipe nome="Amanda" idade='20' cargo='Dev' facebook='https://facebook.com'/>

    </div>
  )
} */

// ========================================================================================================
// 34. Aplicando Class component
// import React, { Component } from "react"

// class Equipe extends Component {
//   render() {
//     return (
//       <div>
//         <Sobre getnome={this.props.nome} getidade={this.props.idade} getcargo={this.props.cargo} />
//         <Social/>
//         <hr />
//       </div>
//     );
//   }
// }

// class Sobre extends Component {
//   render() {
//     return (
//       <h2>Nome: {this.props.getnome} idade: {this.props.getidade} cargo: {this.props.getcargo}</h2>
//     );
//   }
// }

// const Social = () => {
//   return (
//     <div>
//       <a>Facebook </a>
//       <a>Linkdin </a>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <div>
//       <h1>Conhaça nossa equipe! </h1>
//       <Equipe nome='Joao' idade='23' cargo='Dev' />
//       <Equipe nome='Marcelo' idade='33' cargo='Dev' />
//       <Equipe nome='Vitor' idade='24' cargo='Ux' />
//     </div>
//   )
// }

// ========================================================================================================
// 35. Trabalhando com states
// import React, { Component } from "react";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       nome: 'João',
//       contador: 0
//     };
//     this.aumentar = this.aumentar.bind(this);
//     this.diminuir = this.diminuir.bind(this);
//   }

//   aumentar = () => {
//     let state = this.state;
//     state.contador += 1;
//     state.nome = "matheus"
//     this.setState(state)
//   }

//   diminuir = () => {
//     let state = this.state;
//     if (state.contador === 0){
//       alert('Chegou a zero!')
//       return}
//     state.contador -= 1;
//     this.setState(state)
//   }

//   render() {
//     return (
//       <div>
//         <h1>Contador</h1>
//         {this.state.nome}
//         <h3><button onClick={this.diminuir}>-</button> {this.state.contador} <button onClick={this.aumentar}>+</button></h3>
//       </div>
//     );
//   }
// }

// export default App;
// ========================================================================================================
// 37. Ciclo de vida dos componentes

// import React, { Component } from "react";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       hora: '00:00:00'
//     };
//   }

//   componentDidMount() {
//     setInterval(() => {
//       this.setState({ hora: new Date().toLocaleTimeString() })
//     }, 1000);

//   }

//   componentDidUpdate() {
//     console.log('Atualizou');
//   }

//   render() {
//     return (
//       <div>
//         <h1>Meu projeto! {this.state.hora}</h1>
//       </div>
//     );
//   }

// }
// export default App;

// ========================================================================================================
// para rodar tem que instalar a pasata node_modulos