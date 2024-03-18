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
                <Link to='/painel-florestal' className='sidebar-top-font-secundario'>
                    {/* <FiUser color='#fff' size={24} /> */}
                    Painel Florestal
                </Link>
                <Link to='/profile' className='sidebar-top-font-secundario'>
                    {/* <FiSettings color='#fff' size={24} /> */}
                    Ações e Resultados
                </Link>
                <Link to='/profile' className='sidebar-top-font-secundario'>
                    {/* <FiSettings color='#fff' size={24} /> */}
                    Painel Geo
                </Link>
                <Link to='/profile' className='sidebar-top-font-secundario'>
                    {/* <FiSettings color='#fff' size={24} /> */}
                    Rede
                </Link>
            </div>
            <div className='sidebar-bottom'></div>
        </div>
    );
}