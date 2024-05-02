import { useEffect, useState, useContext } from 'react';

import Paginacao from '../../componentes/Footer'
import Card from '../../componentes/Card'
import { buscarParametro } from '../../services/api'
import { AuthContext } from '../../contexts';
import './home.css'

export default function Home() {
    const { buscador } = useContext(AuthContext);

    const [arrPokmons, setArrPokmons] = useState([]);
    const [pagina, setPagina] = useState(1);
    const [arrFilter, setArrFilter] = useState([]);
    const [vai, setvai] = useState(true)

    function quantidadeInicial() {
        return (pagina - 1) * 9 + 1
    }

    function changePage(nun) {
        setPagina(nun)
    }

    function funcFind() {
        setArrFilter([...arrPokmons.filter((e) => e.name.includes(`${buscador}`))])
    }

    function carregandoPagina() {
        return (
            arrFilter.map((e, i) => {
                return (
                    <div key={i}>
                        <Card
                            id={e.id}
                            nome={e.name}
                            urlImage={e.imageUrl}
                            color={e.color}
                        />
                    </div>
                );
            })
        );
    }

    useEffect(() => {
        let num = quantidadeInicial()

        async function loadingPokemon() {
            try {
                const getPropPokemon = await buscarParametro(num)
                setArrPokmons([...getPropPokemon.data])
                setArrFilter([...getPropPokemon.data]);

            } catch (error) {
                console.error(`Veja o erro -> `, error);
            }
        }
        loadingPokemon();

    }, [pagina]);

    useEffect(() => {
        funcFind();
    }, [buscador])

    return (
        <>
            <div className='class-div-home' >

                {carregandoPagina()}

            </div>
            <Paginacao changePage={changePage} />
        </>
    );
}