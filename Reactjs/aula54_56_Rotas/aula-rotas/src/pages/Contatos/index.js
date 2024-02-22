import { Link } from 'react-router-dom';

function Contato() {
    return (
        <div>
            <h1>Página Contatos</h1>
            <span>Contatos da empresa (dd) xxxx-xxxx</span><br /><br />
            <Link to='/'>Home</Link><br/>
            <Link to='/sobre'>Sobre</Link><br />

        </div>
    )
}

export default Contato;