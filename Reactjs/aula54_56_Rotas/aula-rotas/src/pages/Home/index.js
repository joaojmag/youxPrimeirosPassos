// import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Pagina Home</h1>
      <span>Olá João</span><br /><br />

      <Link to='/sobre'>Sobre</Link><br />
      <Link to='/contato'>Contato</Link>
      <hr />
      <Link to='/produto/113'>produto113</Link>

    </div>
  );
}

export default Home;
