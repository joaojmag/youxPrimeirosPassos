<template>
    <div class="cadastro">
        <h1>Faça seu cadastro</h1>
        <form @submit.prevent="cadastrarDados">
            <label>Nome Completo</label>
            <input type="text" id="nome" v-model="nome" required />

            <label>E-mail</label>
            <input type="text" id="email" v-model="email" required />

            <label>Data de Nascimento (dd/mm/aaaa)</label>
            <input type="text" id="dataNascimento" v-model="dataNascimento" required />

            <label>Senha</label>
            <input type="password" id="senha" v-model="senha" required />

            <label>Confirmar Senha</label>
            <input type="password" id="confSenha" v-model="confSenha" required />

            <button type="submit">Cadastrar</button>
        </form>
        {{  }}
    </div>
</template>

<script>
import { criarUsuario } from '@/components/services/api'

export default {
    data() {
        return {
            nome: '',
            email: '',
            dataNascimento: '',
            senha: '',
            confSenha: ''
        };
    },
    methods: {
        async cadastrarDados() {
            const usuarioData = {
                nome: this.nome,
                email: this.email,
                dataNascimento: this.dataNascimento,
                senha: this.senha,
                role: "USER"
            };

            console.log('Enviando dados:', usuarioData);

            try {
                await criarUsuario(usuarioData);
            } catch (error) {
                console.log('Erro ao cadastrar:', error);
            }
        }
    }
};
</script>

<style>
.cadastro {
    display: flex;
    flex-direction: column;
    row-gap: 30%;
}

.cadastro form {
    display: flex;
    flex-direction: column;
    row-gap: 3%;
}
</style>