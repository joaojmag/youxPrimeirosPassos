import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from '../../serverces/api'
import './filme-info.css';
import { toast } from 'react-toastify'

function Filme() {
    const { id } = useParams();
    const [filme, setFilme] = useState({})
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();

    useEffect(() => {
        async function loadFilme() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: '28fc232cc001c31e8a031f419d0a14ca',
                    language: 'pt-br',
                }
            })
                .then((response) => {
                    setFilme(response.data);
                    setLoading(false);
                })
                .catch(() => {
                    console.log("Filme não encontrado");
                    navigate('/', { replace: true })
                    return;
                }
                )
        }

        loadFilme();

        return () => {
            console.log('componente foi desmontado');
        }

    }, [navigate, id])

    function salvarFilme() {
        const minhaLista = localStorage.getItem('@primeflix');
        let filmeSalvo = JSON.parse(minhaLista) || [];

        const hasFilme = filmeSalvo.some(e => e.id === filme.id)

        if (hasFilme) {
            toast.warn('ESSE FILME JÁ ESTÁ NA LISTA!');
            return;
        }

        filmeSalvo.push(filme);
        localStorage.setItem('@primeflix', JSON.stringify(filmeSalvo))
        toast.success('FILME SALVO COM SUCESSO!')
    }

    if (loading) {
        return (
            <div className="filme-info">
                <h1>Carregado detalhes...</h1>
            </div>
        )
    }

    return (
        <div className="filme-info" >
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}></img>

            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <span>Avaliação: {parseFloat(filme.vote_average).toFixed(1)} / 10</span>

            <div className="area-buttons">
                <button onClick={salvarFilme}>Salvar</button>
                <button>
                    <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title} Trailer`} >Trailer</a>
                </button>

            </div>
        </div>
    );
}

export default Filme;