// import { useContext } from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import { useEffect, useState } from 'react';

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

    const [menuSelecionado, setMenuSelecionado] = useState(0)

    useEffect(() => {
        console.log('menuSelecionado :>> ', menuSelecionado);
    },[menuSelecionado])

    return (
        <div className='sidebar-primaria'>
            <div className='sidebar-top'>

                {listaMenus.map((e, i) => {
                    return (
                        <Link to={e.path} onClick={() => setMenuSelecionado(i)} key={i}
                            style={menuSelecionado == i ? 
                                { color: '#ABBF3B', fontWeight: 'bold', borderBottom: 'solid 2px #ABBF3B', paddingBottom: '10px' }
                                : {}}>
                            {e.label}
                        </Link>
                    )
                })}
            
            </div>
            <div className='sidebar-bottom'></div>
        </div>
    );
}