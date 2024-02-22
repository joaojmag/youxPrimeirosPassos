import React, { useEffect, useState } from "react";
import './style.css'
////https://sujeitoprogramador.com/rn-api/?api=posts

function App() {
  const [nutri, setNutri] = useState([]);
  useEffect(() => {
    function caregarApi() {
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'

      fetch(url)// para usar a url
        .then((r) => r.json())
        .then((arrjson) => {
          console.log(arrjson);
          setNutri(arrjson)
        })
    }

    caregarApi();
  }, []);


  return (
    <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>

      {nutri.map(e => {
        return (
          <article key={e.id} className="post">
            <strong className="titulo">{e.titulo}</strong>
            <img src={e.capa} alt={e.titulo} className="capa"/>
            <p className="subtitulo">{e.subtitulo}</p>
            <a className="botao">Acessar</a>
          </article>
        )
      })}
    </div>
  );
}

export default App;
