// import { useContext } from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import { useState } from 'react';

export default function Header() {

    const listaMenus = [
        {
            label: 'Início',
            path: '/'
        },
        {
            label: 'Painel Florestal',
            path: '/painel-florestal/florestas-brasil'
        },
        {
            label: 'Ações e Resultados',
            path: '/acoes-resultados'
        },
        {
            label: 'Painel Geo',
            path: '/'
        },
        {
            label: 'Rede',
            path: '/rede'
        },

    ]

    const [menuSelecionado, setMenuSelecionado] = useState('inicio')

    return (
        <div className='sidebar-primaria'>
            <div className='sidebar-top'>

                {listaMenus.map((e) => {
                    return (
                        <Link to={e.path} onClick={() => setMenuSelecionado('inicio')}
                            style={menuSelecionado == 'inicio' ? { color: '#ABBF3B', fontWeight: 'bold' } : {}}>
                            {e.label}
                        </Link>
                    )
                })}

                {/* <Link to='/' className='sidebar-top-font-secundario' onClick={() => setMenuSelecionado('inicio')}
                    style={menuSelecionado == 'inicio' ? { color: '#ABBF3B', fontWeight: 'bold' } : {}}
                >
                    Início
                </Link>
                <Link to='/painel-florestal/florestas-brasil' className='sidebar-top-font-secundario'
                    onClick={() => setMenuSelecionado('painelFlorestal')}>
                    Painel Florestal
                </Link>
                <Link to='/acoes-resultados' className='sidebar-top-font-secundario' onClick={() => setMenuSelecionado('painelFlorestal')}>
                    Ações e Resultados
                </Link>
                <Link to='/' className='sidebar-top-font-secundario' onClick={() => setMenuSelecionado('painelFlorestal')}>
                    Painel Geo
                </Link>
                <Link to='/rede' className='sidebar-top-font-secundario' onClick={() => setMenuSelecionado('painelFlorestal')}>
                    Rede
                </Link> */}


            </div>
            <div className='sidebar-bottom'></div>
        </div>
    );
}