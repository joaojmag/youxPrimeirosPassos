// import { useContext } from 'react'
import { Link } from 'react-router-dom'
import './header.css'

export default function Header() {

    function mudarClasse(e) {
        console.log(e.target.className);
        e.target.className = 'sidebar-top-font-primario'
        // e.target.classList.replace('sidebar-top-font-secundario', 'sidebar-top-font-primario');
    }

    return (
        <div className='sidebar-primaria'>
            <div className='sidebar-top'>
                <Link to='/' className='sidebar-top-font-secundario' onClick={mudarClasse}>
                    Início
                </Link>
                <Link to='/painel-florestal/florestas-brasil' className='sidebar-top-font-secundario' onClick={mudarClasse}>
                    Painel Florestal
                </Link>
                <Link to='/acoes-resultados' className='sidebar-top-font-secundario' onClick={mudarClasse}>
                    Ações e Resultados
                </Link>
                <Link to='/' className='sidebar-top-font-secundario' onClick={mudarClasse}>
                    Painel Geo
                </Link>
                <Link to='/rede' className='sidebar-top-font-secundario' onClick={mudarClasse}>
                    Rede
                </Link>
            </div>
            <div className='sidebar-bottom'></div>
        </div>
    );
}