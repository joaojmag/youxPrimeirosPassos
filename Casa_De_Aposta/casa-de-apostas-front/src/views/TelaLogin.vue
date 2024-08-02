<template>
    <div class="telaLogin">
        <h1>Tela de Login</h1>
        <form @submit.prevent="fazendoLogin">
            <label>E-mail</label>
            <input type="text" id="email" v-model="email" required />

            <label>Senha</label>
            <div class="visualizarSenha">
                <input v-bind:type="ver ? 'password' : 'text'" id="senha" v-model="senha" required />
                <div @click="visualizar">{{ ver ? "ver senha" : "esconder senha" }}</div>
            </div>

            <button type="submit">Fazer Login</button>
        </form>

        <div id="resetarSenha">
            <h1>Resetar a senha</h1>
            <form @submit.prevent="recuperarSenha">
                <label>E-mail</label>
                <input type="text" id="emailRec" v-model="emailRec" required />

                <label>Senha</label>
                <div class="visualizarSenha">
                    <input v-bind:type="verRec ? 'password' : 'text'" id="senhaRec" v-model="senhaRec" required />
                    <div @click="visualizarRec">{{ verRec ? "ver senha" : "esconder senha" }}</div>
                </div>

                <button type="submit">Resetar Senha</button>
            </form>
        </div>
    </div>
</template>

<script>
import { fazerLogin, resetarSenha } from '@/components/services/api'

export default {
    data() {
        return {
            email: '',
            senha: '',
            ver: true,

            emailRec: '',
            senhaRec: '',
            verRec: true
        };
    },
    methods: {
        async fazendoLogin() {
            const objLogando = {
                login: this.email,
                password: this.senha
            }
            try {
                const token = await fazerLogin(objLogando);
                console.log(token.data);

            } catch (error) {
                console.log("Erro ao logar ", error);
            }
        },
        visualizar() {
            this.ver = !this.ver;
        },
        visualizarRec() {
            this.verRec = !this.verRec;
        },
        async recuperarSenha() {
            const objResetar = {
                login: this.emailRec,
                password: this.senhaRec
            }
            try {
                const retornoSenha = await resetarSenha(objResetar);
                console.log(retornoSenha.data);

            } catch (error) {
                console.log("Erro ao resetar a senha ", error);
            }
        }
    }
}
</script>

<style scoped>
.telaLogin {
    display: flex;
    flex-direction: column;
    row-gap: 20%;
}

.telaLogin form {
    display: flex;
    flex-direction: column;
    row-gap: 3%;
}

.telaLogin div {
    display: flex;
    flex-direction: row;
}

.visualizarSenha div {
    cursor: pointer;
}

#resetarSenha {
    display: flex;
    flex-direction: column;
    margin-top: 5%;
}
</style>