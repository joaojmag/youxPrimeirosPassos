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
            <div class="visualizarSenha">
                <input v-bind:type="ver1 ? 'password' : 'text'" id="senha" v-model="senha" required />
                <div @click="visualizar1">{{ ver1 ? "ver senha" : "esconder senha" }}</div>
            </div>

            <label>Confirmar Senha</label>
            <div class="visualizarSenha">
                <input v-bind:type="ver2 ? 'password' : 'text'" id="confSenha" v-model="confSenha" required />
                <div @click="visualizar2">{{ ver2 ? "ver senha" : "esconder senha" }}</div>
            </div>

            <button type="submit">Cadastrar</button>
        </form>

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
            confSenha: '',
            ver1: true,
            ver2: true
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

            if (this.confirmacaoDeSenha()) {
                try {
                    await criarUsuario(usuarioData);
                    alert("Verifique seu e-mail para liberação do site")
                } catch (error) {
                    console.log('Erro ao cadastrar:', error);
                }
            }
        },
        visualizar1() {
            this.ver1 = !this.ver1;
        },
        visualizar2() {
            this.ver2 = !this.ver2;
        },
        confirmacaoDeSenha() {
            if ((this.validarSenha()) & (this.senha === this.confSenha)) {
                return true
            } else {
                alert("Senha diferente de Confirmar Senha")
                return false
            }
        },
        validarSenha() {
            const validador = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]{8,}$/;
            if (!validador.test(this.senha)) {
                alert('A senha deve ter no mínimo 8 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais.');
                return false
            } else {
                return true;
            }
        }
    }
};
</script>

<style scoped>
.cadastro {
    display: flex;
    flex-direction: column;
    row-gap: 15%;
}

.cadastro form {
    display: flex;
    flex-direction: column;
    row-gap: 3%;
}

.visualizarSenha {
    display: flex;
}

.visualizarSenha div {
    cursor: pointer;
}
</style>