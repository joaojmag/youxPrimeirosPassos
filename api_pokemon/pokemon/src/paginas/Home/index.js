import { useEffect, useState } from 'react';

import Card from '../../componentes/Card'
import api from '../../services/api'
import './home.css'

export default function Home() {
    const [arrPokmons, setArrPokmons] = useState([]);
    const [idPokemon, setIdPokemon] = useState(1)


    useEffect(() => {

        async function loadingPokemon() {
            try {
                const getPropPokemon = await api.get(`offset=150&limit=5`)
                let data = {
                    nome: `${getPropPokemon.data.name}`,
                    imagem: `${getPropPokemon.data.imageUrl}`,
                }


                console.log('getPropPokemon.data :>> ', getPropPokemon.data);
                console.log('antes arrPokmons :>> ', arrPokmons);
                
                setArrPokmons([...arrPokmons, data]);

                console.log('depois arrPokmons :>> ', arrPokmons);

            } catch (error) {
                console.error(`Veja o erro -> `, error);
            }
        }

        loadingPokemon();
    }, []);

    return (
        <div className='class-div-home'>

            {arrPokmons.map((e, i) => {
                return (
                    <>
                        <Card
                            key={i}
                            nome={e.nome}
                            urlImage={e.imagem}
                        />
                        {console.log('arrPokmons dentro do map' ,e)}
                    </>
                );
            })}

            {/* {Array(9).fill().map(() => (
                <Card
                    id="2"
                    nome=""
                    urlImage=""
                />
            ))} */}
        </div>
    );
}