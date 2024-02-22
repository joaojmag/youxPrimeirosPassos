// import React from 'react';
import { Link } from 'react-router-dom';


function Sobre() {
  return (
    <div>
      <h1>Pagina so da firma</h1><br /><br />
      <Link to='/'>Página Home</Link><br />
      <Link to='/contato'>Contato</Link>
    </div>
  );
}

export default Sobre;
