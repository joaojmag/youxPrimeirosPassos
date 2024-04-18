import axios from 'axios';

const apt = axios.create({
    baseURL: 'https://pokeapi.deno.dev/pokemon?'
});

export default apt;