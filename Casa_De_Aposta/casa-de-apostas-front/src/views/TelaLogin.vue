<template>
    <div class="telaLogin">
        <div id="login" class="login" v-if="telas">
            <h1>Login YOUX</h1>
            <form @submit.prevent="fazendoLogin">
                <!-- <label>E-mail</label> -->
                <input type="text" id="email" class="email" v-model="email" required>

                <!-- <label>Senha</label> -->
                <div class="visualizarSenha">
                    <input v-bind:type="ver ? 'password' : 'text'" id="senha" class="senha" v-model="senha" required />
                    <img v-if="ver" @click="visualizar" src="../assets/Eye_off.svg" alt="">
                    <img v-else="ver" @click="visualizar" src="../assets/Eye.svg" alt="">
                    <!-- <div @click="visualizar">{{ ver ? "ver senha" : "esconder senha" }}</div> -->
                </div>

                <button type="submit">ENTRAR</button>
            </form>
        </div>

        <div id="resetarSenha" class="login" v-if="!telas">
            <h1>Resetar a senha</h1>
            <form @submit.prevent="recuperarSenha">
                <!-- <label>E-mail</label> -->
                <input type="text" id="emailRec" class="email" v-model="emailRec" required />

                <!-- <label>Senha</label> -->
                <div class="visualizarSenha">
                    <input v-bind:type="verRec ? 'password' : 'text'" id="senhaRec" class="senha" v-model="senhaRec"
                        required />
                    <img v-if="verRec" @click="visualizarRec" src="../assets/Eye_off.svg" alt="">
                    <img v-else="verRec" @click="visualizarRec" src="../assets/Eye.svg" alt="">
                    <!-- <div @click="visualizarRec">{{ verRec ? "ver senha" : "esconder senha" }}</div> -->
                </div>
                <button type="submit">Resetar Senha</button>
                <!-- <button @click="alternar" id="btn_voltar_login">Voltar ao Login</button> -->
            </form>
        </div>

        <div style="display: flex; flex-direction: column; align-items: center;">
            <span @click="irCadastro">CRIAR CONTA</span>
            <span @click="alternar">{{ telas ? 'ESQUECEU A SENHA?' : 'VOLTAR AO LOGIN' }}</span>
        </div>

        <!-- Outra forma de fazer 
        <router-link to="/perfiladm">
            <span>ESQUECEU A SENHA?</span>
        </router-link> -->
    </div>
</template>

<script>
import { fazerLogin, resetarSenha, limparLocalStorage } from '@/components/services/api'

export default {
    data() {
        return {
            email: '',
            senha: '',
            ver: true,

            emailRec: '',
            senhaRec: '',
            verRec: true,

            telas: true
        };
    },
    methods: {
        async fazendoLogin() {

            limparLocalStorage();

            const objLogando = {
                login: this.email,
                password: this.senha
            }
            try {
                const { data } = await fazerLogin(objLogando);

                const token = data.token;
                localStorage.setItem('authToken', token);
                this.irDeshUser()

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

            limparLocalStorage()

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
        },
        alternar() {
            this.telas = !this.telas
        },
        irCadastro() {
            this.$router.push("/cadastro");
        },
        irDeshUser() {
            this.$router.push("/perfilusuario");
        }
    }
}
</script>

<style scoped>
.telaLogin {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgb(34, 34, 34);
    row-gap: 5%;
}

.login {
    width: 50%;
    height: 60%;
    background: #D9D9D9;
    border-radius: 26px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.login h1 {
    font-family: Inter;
    font-size: 30px;
    font-style: italic;
    font-weight: 700;
    line-height: 44.78px;
    text-align: left;
    color: #8E2B39;
}

.login input {
    width: 100%;
    height: 45%;
    border-radius: 8px;
    text-align: center;
}

.login form {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 20%;
}

.login button {
    position: relative;
    left: 68%;
    font-style: italic;
    background: #8E2B39;
    border-radius: 15px;
    color: #fff;
    width: 40%;
    height: 8em;
    cursor: pointer;
}

.visualizarSenha img {
    position: relative;
    bottom: 50%;
    left: 1%;
    z-index: 1;
    cursor: pointer;

}

.email {
    background-image: url("../assets/User.svg");
    background-repeat: no-repeat;
    background-position: right;
    background-size: 1.3em;
    padding-left: 1.3em;
}

.senha {
    background-image: url("../assets/Key.svg");
    background-repeat: no-repeat;
    background-position: right;
    background-size: 1.3em;
    padding-left: 1.3em;
}

#btn_voltar_login {
    position: absolute;
    left: 43%;
    bottom: 20%;
    width: 14%;
    height: 4%;
    cursor: pointer;
}

.telaLogin span {
    font-size: 15px;
    font-style: italic;
    font-weight: 700;
    line-height: 18.15px;
    text-align: left;

    color: #8E2B39;
    cursor: pointer;
}
</style>
<!-- 
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
</style> -->