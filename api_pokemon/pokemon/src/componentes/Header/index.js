import { useContext } from 'react'

import pokeball from '../../imagens/pokeball.png'
import pokejao from '../../imagens/pokejao.png'
import { AuthContext } from '../../contexts';

import './header.css'


export default function Header() {
    const { buscador, handleinputChange } = useContext(AuthContext);

    return (
        <div className='class-div-header'>
            <img className='pokeball' src={pokeball} />
            <img className='pokejao' src={pokejao} />

            <input
                type="text"
                placeholder="Procure seu Pokémon"
                value={buscador}
                onChange={handleinputChange}
            />
        </div>
    );
}