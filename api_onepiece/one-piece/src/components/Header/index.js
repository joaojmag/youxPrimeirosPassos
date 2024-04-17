import { Link } from 'react-router-dom'

import './header.css'

export default function Header() {

    const textHeader = [

        {
            label: 'Início',
            path: '/'
        },

        {
            label: 'Os Frutos',
            path: '/'
        },

        {
            label: 'Os Personagens',
            path: '/'
        },
        {
            label: 'As Tripulações',
            path: '/'
        },

    ]

    return (
        <div>
            <header className="classe-header">
                {textHeader.map((e, i) => {
                    return (<h1>{e}</h1>
                    );
                })}
            </header>
        </div>
    );
}