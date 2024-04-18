import axios from 'axios';

const api = axios.create({
    baseURL: 'https://pokeapi.deno.dev'
});

export async function buscarTodos() {
    return await api.get('/pokemon')
}

export async function buscarPorId(id) {
    return await api.get(`/pokemon/${id}`)
}

export async function buscarParametro(quantidade) {
    const limite = 9
    return await api.get(`/pokemon?offset=${quantidade}&limit=${limite}`)
}