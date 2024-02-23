// url da api /movie/now_playing?api_key=28fc232cc001c31e8a031f419d0a14ca&language=pt-br

import { useEffect, useState } from "react";
import api from "../../serverces/api";
import { Link } from "react-router-dom";
import './home.css';

function Home() {
    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilme() {
            const response = await api.get('movie/now_playing', {
                params: {
                    api_key: '28fc232cc001c31e8a031f419d0a14ca',
                    language: 'pt-br',
                    page: 1,
                }
            })
            // console.log(response.data.results.slice(0,10));
            setFilme(response.data.results.slice(0, 10));
            setLoading(false)
        };

        loadFilme();
    }, [])

    if (loading) {
        return (<div className="loading">
            <h2>Caregando...</h2>
        </div>);
    }

    return (
        <div className="container">
            <div className="lista-filmes">
                {filme.map(e => {
                    return (
                        <article key={e.id}>
                            <strong>{e.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${e.poster_path}`} alt={e.title}></img>
                            <Link to={`/filme/${e.id}`}>Acessar</Link>
                        </article>
                    );
                })}
            </div>
        </div>
    );
}

export default Home;