// import { useContext } from 'react'
import { Link } from 'react-router-dom'
import './header.css'

export default function Header() {

    return (
        <div className='sidebar-primaria'>
            <div className='sidebar-top'>
                <Link to='/' className='sidebar-top-font-primario'>
                    Início
                </Link>
                <Link to='/painel-florestal/florestas-brasil' className='sidebar-top-font-secundario'>
                    Painel Florestal
                </Link>
                <Link to='/acoes-resultados' className='sidebar-top-font-secundario'>
                    Ações e Resultados
                </Link>
                <Link to='/profile' className='sidebar-top-font-secundario'>
                    Painel Geo
                </Link>
                <Link to='/profile' className='sidebar-top-font-secundario'>
                    Rede
                </Link>
            </div>
            <div className='sidebar-bottom'></div>
        </div>
    );
}