import { useEffect, useState } from 'react';

import Paginacao from '../../componentes/Footer'
import Card from '../../componentes/Card'
import { buscarParametro } from '../../services/api'
import './home.css'

export default function Home() {
    const [arrPokmons, setArrPokmons] = useState([]);
    const [pagina, setPagina] = useState(1);

    function quantidadeInicial() {
        let res = (pagina - 1) * 9 + 1
        return res
    }

    function changePage(nun) {
        setPagina(nun)
    }

    useEffect(() => {
        let num = quantidadeInicial()

        async function loadingPokemon() {
            try {
                const getPropPokemon = await buscarParametro(num)
                setArrPokmons(getPropPokemon.data)

            } catch (error) {
                console.error(`Veja o erro -> `, error);
            }
        }

        loadingPokemon();
    }, [pagina]);

    return (
        <>
            <div className='class-div-home' >

                {arrPokmons.map((e) => {
                    return (
                        <>
                            <Card
                                id={e.id}
                                nome={e.name}
                                urlImage={e.imageUrl}
                                color={e.color}
                            />
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
            <Paginacao changePage={changePage} />
        </>
    );
}