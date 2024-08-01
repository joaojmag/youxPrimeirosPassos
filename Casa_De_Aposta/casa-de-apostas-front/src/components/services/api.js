import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api'
});

export async function buscarTodos() {
  return await api.get('/usuarios')
}

export async function buscarPorId(id) {
  return await api.get(`/usuarios/${id}`)
}

export async function criarUsuario(usuario) {
  return await api.post(`/auth/register`, usuario)
}

export async function fazerLogin(usuario) {
  return await api.post(`/auth/login`, usuario)
}

export async function resetarSenha(usuario) {
  return await api.post(`/auth/resetar/senha`, usuario)
}

export async function deletar(id) {
  return await api.delete(`/usuarios/${id}`)
}

export async function atualizarPorId(id) {
  return await api.put(`/usuarios/${id}`)
}

export async function bloquearUsuario(id) {
  return await api.put(`/usuarios/bloquear/${id}`)
}