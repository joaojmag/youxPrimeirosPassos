<template>
    <div class="cadastro">
        <div class="subCadastro">
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
                    <input v-bind:type="ver ? 'password' : 'text'" id="senha" v-model="senha" required />
                    <img v-if="ver" @click="visualizar1" src="../assets/Eye_off.svg" alt="">
                    <img v-else="ver" @click="visualizar1" src="../assets/Eye.svg" alt="">
                    <!-- <div @click="visualizar1">{{ ver ? "ver senha" : "esconder senha" }}</div> -->
                </div>

                <label>Confirmar Senha</label>
                <div class="visualizarSenha">
                    <input v-bind:type="ver ? 'password' : 'text'" id="confSenha" v-model="confSenha" required />
                    <!-- <img v-if="ver" @click="visualizar1" src="../assets/Eye.svg" alt="">
                    <img v-else="ver" @click="visualizar1" src="../assets/Eye_off.svg" alt=""> -->
                    <!-- <div @click="visualizar2">{{ ver2 ? "ver senha" : "esconder senha" }}</div> -->
                </div>

                <button type="submit">Cadastrar</button>
            </form>
            <button @click="irLogin" id="btn_voltar_login">Voltar ao Login</button>

        </div>
    </div>
</template>

<script>
import { criarUsuario, limparLocalStorage } from '@/components/services/api'

export default {
    data() {
        return {
            nome: '',
            email: '',
            dataNascimento: '',
            senha: '',
            confSenha: '',
            ver: true,
            ver2: true
        };
    },
    methods: {
        async cadastrarDados() {

            limparLocalStorage()

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
                    this.irLogin()
                } catch (error) {
                    console.log('Erro ao cadastrar:', error);
                }
            }
        },
        visualizar1() {
            this.ver = !this.ver;
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
        },
        irLogin() {
            this.$router.push('/')
        }
    }
};
</script>

<style scoped>
.cadastro {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgb(34, 34, 34);
}

.subCadastro {
    width: 50%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #D9D9D9;
    border-radius: 15px;
}

.subCadastro form {
    display: flex;
    flex-direction: column;
    row-gap: 1%;
}

.subCadastro h1 {
    font-family: Inter;
    font-size: 30px;
    font-style: italic;
    font-weight: 700;
    line-height: 44.78px;
    text-align: left;
    color: #8E2B39;
}

.subCadastro label {
    color: #8E2B39;
}

.subCadastro input {
    width: 100%;
    border-radius: 5px;
    text-align: center;
}

.subCadastro img {
    position: relative;
    bottom: 81%;
    left: 1%;
    z-index: 1;
    cursor: pointer;
}

.visualizarSenha {
    height: 10%;
}

.subCadastro button {
    position: relative;
    left: 64%;
    font-style: italic;
    background: #8E2B39;
    border-radius: 15px;
    color: #fff;
    width: 40%;
    height: 3em;
    cursor: pointer;
}

#btn_voltar_login {
    position: relative;
    left: 0;
    top: 5%;
}
</style>
<!-- 
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
</style> -->