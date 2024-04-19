// import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'


// import api from '../../services/api'
import './card.css'

export default function Card({ id, nome, urlImage, color }) {
    // const [imagem, setImagem] = useState({})
    const navigate = useNavigate();


    // useEffect(() => {

    // async function testes(numId) {
    //     try {
    //         const imagem = await api.get(numId)
    //         let data = {
    //             nome: `${imagem.data.name}`,
    //             imagem: `${imagem.data.imageUrl}`,
    //         }
    //         setImagem(data)

    //     } catch (error) {
    //         console.error(`Veja o erro -> `, error);
    //     }

    // }

    //     testes();
    // }, [])

    function clicando() {
        navigate(`/detalhes/${id}`)
    }

    return (
        <div key={id} onClick={() => clicando()} className='class-div-card' style={{ background: `${color}` }}>
            <img src={urlImage} />
            <span>
                <h1>{nome}</h1>
            </span>
        </div>
    );
}