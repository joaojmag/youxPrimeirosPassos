import pokeball from '../../imagens/pokeball.png'
import pokejao from '../../imagens/pokejao.png'

import './header.css'


export default function Header() {
    return (
        <div className='class-div-header'>
            <img className='pokeball' src={pokeball} />
            <img className='pokejao' src={pokejao} />
        </div>
    );
}