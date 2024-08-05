import axios from 'axios';
import { Buffer } from 'buffer';

// Função para obter o token de autenticação do localStorage
function getAuthToken() {
  return localStorage.getItem('authToken');
}

export function parseJwt() {
  const token = getAuthToken();
  return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
}

const api = axios.create({
  baseURL: 'http://localhost:8080/api'
});

// Interceptor para adicionar o token de autenticação a todas as requisições
api.interceptors.request.use(config => {
  const token = getAuthToken();
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

// Altenticação
export async function criarUsuario(usuario) {
  return await api.post(`/auth/register`, usuario)
}

export async function fazerLogin(usuario) {
  return await api.post(`/auth/login`, usuario)
}

export async function resetarSenha(usuario) {
  return await api.post(`/auth/resetar/senha`, usuario)
}

// Usuario
export async function buscarTodos() {
  return await api.get('/usuarios')
}

export async function buscarPorId(id) {
  return await api.get(`/usuarios/${id}`)
}

export async function deletar(id) {
  return await api.delete(`/usuarios/${id}`)
}

export async function atualizarPorId(id, usuarioAtualizado) {
  return await api.put(`/usuarios/${id}`, usuarioAtualizado)
}

export async function bloquearUsuario(id) {
  return await api.put(`/usuarios/bloquear/${id}`)
}

// Jogo
export async function buscarTodosJogos() {
  return await api.get('/jogo')
}

export async function iniciarPartida(iniciar) {
  return await api.post('/jogo/comecar', iniciar)
  // {
  //   "valorDaAposta": int,
  //     "iniciar": boolean,
  //       "idDoUsuario": int
  // }
}

export async function jogando(jogando) {
  return await api.post('/jogo/comecar/jogando', jogando)
  // {
  //   "posicaoNumClicado" : int,
  //     "encerrar": boolean,
  //       "idDoJogo": int
  // }
}