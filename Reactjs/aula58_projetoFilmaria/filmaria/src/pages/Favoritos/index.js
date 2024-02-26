import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './favoritos.css'
import {toast} from 'react-toastify'


function Favoritos() {

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const minhaLista = localStorage.getItem('@primeflix');
        setFilmes(JSON.parse(minhaLista) || [])
    }, [])

    function deletandoFilme(idFilme) {
        let filtroFilmes = filmes.filter(e => {
            return (e.id !== idFilme);
        })
        setFilmes(filtroFilmes);
        localStorage.setItem('@primeflix', JSON.stringify(filtroFilmes))
        toast.success('Filme removido com sucesso!')
    }

    return (
        <div className='meus-filmes'>
            <h1>Meus Filmes</h1>
            {filmes.length === 0 && <samp>Você não tem filmes salvos aqui!</samp>}
            <ul>
                {filmes.map(e => {
                    return (
                        <li key={e.id}>
                            <span>{e.title}</span>
                            <div>
                                <Link to={`/filme/${e.id}`}>Ver detalhes</Link>
                                <button onClick={() => deletandoFilme(e.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos;