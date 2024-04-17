import Card from '../../componentes/Card'


import api from '../../services/api'
import './home.css'

export default function Home() {
    return (
        <div className='class-div-home'>
            {Array(9).fill().map(() => (
                <Card
                    id="2"
                    nome=""
                    urlImage="" 
                />
            ))}
        </div>
    );
}