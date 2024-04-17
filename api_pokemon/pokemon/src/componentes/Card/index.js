import { useState, useEffect } from 'react';

import api from '../../services/api'
import './card.css'

export default function Card() {
    const [imagem, setImagem] = useState({})

    useEffect(() => {

        async function testes() {
            try {
                const imagem = await api.get('1')
                let data = {
                    nome: `${imagem.data.name}`,
                    imagem: `${imagem.data.imageUrl}`,
                }
                setImagem(data)

            } catch (error) {
                console.error(`Veja o erro -> `, error);
            }

        }

        testes();
    }, [])



    return (
        <div className='class-div-card'>
            <img src={imagem.imagem} />
            <span>
                <h1>{imagem.nome}</h1>
            </span>
        </div>
    );
}