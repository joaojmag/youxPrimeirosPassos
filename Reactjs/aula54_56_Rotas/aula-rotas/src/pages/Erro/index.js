import { Link } from "react-router-dom";

function Erro() {
    return (
        <div>
            <h2 style={{cursor: "pointer", marginBottom: '50px'}} >Ops página não encontrada</h2>
            <span>Encontramos essas páginas abaixo</span><br />
            <Link to='/'>Home</Link><br />
            <Link to='/contato'>Contatos</Link><br />
            <Link to='/sobre'>Sobre</Link>
        </div>
    )
}

export default Erro;