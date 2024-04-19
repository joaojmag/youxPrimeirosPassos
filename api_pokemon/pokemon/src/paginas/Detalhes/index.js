import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'


import { buscarPorId } from '../../services/api'
import arrow_left from '../../imagens/arrow_left_alt_FILL0_wght400_GRAD0_opsz48.svg'

import './detalhes.css'

export default function Detalhes() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [proPokemon, setProPokemon] = useState()

    useEffect(() => {

        async function pokemonId() {
            try {
                const idPokemon = await buscarPorId(id)
                setProPokemon(idPokemon.data)

            } catch (error) {
                console.error(`Veja o erro -> `, error);
            }
        }

        pokemonId();

    }, [])

    function voltarRaiz() {
        navigate('/')
    }


    return (
        <div className='class-div-detalhes'>
            <div className='class-div-detalhes-filho' style={{ background: `${proPokemon?.color}` }}>
                <button onClick={() => voltarRaiz()}>
                    <img src={arrow_left} />
                </button>

                <img src={proPokemon?.imageUrl} />
                <h1>{proPokemon?.name}</h1>
            </div>
        </div>
    )
}