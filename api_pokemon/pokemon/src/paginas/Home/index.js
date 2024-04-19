import { useEffect, useState } from 'react';

import Paginacao from '../../componentes/Footer'
import Card from '../../componentes/Card'
import { buscarParametro } from '../../services/api'
import './home.css'

export default function Home() {
    const [arrPokmons, setArrPokmons] = useState([]);
    const [pagina, setPagina] = useState(1);
    const [arrFilter, setArrFilter] = useState([]);

    function quantidadeInicial() {
        return (pagina - 1) * 9 + 1
    }

    function changePage(nun) {
        setPagina(nun)
    }


    function funcFind() {
        /* const busca = arrPokmons.filter((e) => e.name.includes('sau'));
        console.log('busca :>> ', busca); */
        setArrFilter(arrPokmons.filter((e) => e.name.includes('sau')))
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

        funcFind()
        loadingPokemon();
    }, [pagina]);

    return (
        <>
            <div className='class-div-home' >
                {/* tentar fazer um if */}

                {(arrFilter ? arrFilter : arrPokmons).map((e) => {
                    return (
                        <>
                            <Card
                                id={e.id}
                                nome={e.name}
                                urlImage={e.imageUrl}
                                color={e.color}
                            />
                            {console.log(arrFilter)}
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