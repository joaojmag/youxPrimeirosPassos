<template>
    <div class="calasseJogo">
        <!-- <h1>Vamos Jogar!!</h1> -->
        <form v-if="cabecalho" class="valorAposta" @submit.prevent="comecarPartida">
            <label style="margin-top: 15%;"><strong> Digite o valor da aposta</strong></label>
            <input type="text" id="valor" v-model="valor" required />
            <button type="submit">INICIAR</button>
        </form>

        <div v-if="!cabecalho" class="jogando">
            <div class="jogo">
                <!-- <span v-for="num in jogo" :key="num" :id="num" class="campos" @click="cliqueParaJogar(num)"
                    :class="{ clicado: camposClicados.includes(num) }"></span> -->
                <span v-for="num in jogo" :key="num" :id="num" class="campos" @click="cliqueParaJogar(num)"
                    :class="getCampoClass(num)"></span>
            </div>

            <button v-if="this.perdeu !== 'perdeu'" @click="encerrarPartida">FINALIZAR</button>
            <button v-else @click="encerrarPartida">Dashboard</button>
        </div>

    </div>
</template>


<script>
import { iniciarPartida, jogando, parseJwt } from '@/components/services/api'


export default {
    data() {
        return {
            valor: null,
            cabecalho: true,
            jogo: this.criarVetor(),
            idJogo: null,
            valorGanho: 0,
            camposClicados: [],
            perdeu: ''
        }
    },

    methods: {
        criarVetor() {
            const vetor = [];
            for (let i = 0; i < 25; i++) {
                vetor.push(i);
            }
            return vetor;
        },
        async comecarPartida() {
            try {
                this.cabecalho = !this.cabecalho
                const partida = {
                    valorDaAposta: this.valor,
                    iniciar: true,
                    idDoUsuario: parseJwt().id
                }
                const { data } = await iniciarPartida(partida);
                // console.log('data ->', data)
                this.idJogo = data
                // console.log("this.idJogo -> ", this.idJogo);

            } catch (error) {
                console.log("Erro ao criar jogo", error);
            }

        },

        async encerrarPartida() {
            // this.cabecalho = !this.cabecalho

            const jogo = {
                posicaoNumClicado: 25,
                encerrar: true,
                idDoJogo: this.idJogo
            }

            const { data } = await jogando(jogo);
            // console.log(data);
            this.valorGanho = data;
            // console.log("this.valorGanho -> ", this.valorGanho);

            this.irUsuario()
        },

        async cliqueParaJogar(numero) {
            // console.log(numero);

            if (this.camposClicados.includes(numero)) {
                alert("Você já clicou nesse campo!");
                return;
            } else if (this.perdeu === 'perdeu') {
                alert("Você já perdeu! Clique em Dashboard para voltar ao seu perfil.");
                return;
            }

            const jogo = {
                posicaoNumClicado: numero,
                encerrar: false,
                idDoJogo: this.idJogo
            }

            const { data } = await jogando(jogo);
            if (data === 0) {
                alert("Você Perdeu")
                this.camposClicados.push({ numero, status: 'perdeu' }); // Adiciona o campo ao array com status 'perdeu'
                this.perdeu = 'perdeu';
                // this.camposClicados = [];
                // this.cabecalho = !this.cabecalho
            } else {
                alert("Parábens você encontrou um diamante!")
                this.camposClicados.push({ numero, status: 'ganhou' }); // Adiciona o campo ao array com status 'ganhou'
            }

            this.camposClicados.push(numero);
        },
        getCampoClass(numero) {
            const campo = this.camposClicados.find(c => c.numero === numero);
            if (campo) {
                if (campo.status === 'perdeu') {
                    return 'perdeu';
                } else if (campo.status === 'ganhou') {
                    return 'ganhou';
                }
            }
            return '';
        },
        irUsuario() {
            this.$router.push('/perfilusuario')
        },
    }
}
</script>
<style>
.calasseJogo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #D9D9D9;
    width: 100%;
    height: 100vh;
}

.valorAposta {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #D9D9D9;
    width: 80%;
    height: 80%;
    border-radius: 15px;
}

.valorAposta label {
    /* position: relative; */
    /* right: 23%; */
    margin-top: 5%;
    margin-bottom: 1%;
    font-size: 2em;
}

.valorAposta input {
    width: 65%;
    height: 5%;
    border-radius: 15px;
}

.valorAposta button {
    margin-top: 20%;
    font-size: 45px;
    font-style: italic;
    background: #8E2B39;
    border-radius: 15px;
    color: #fff;
    width: 25%;
    height: 2em;
    cursor: pointer;
}

.jogando {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100vh;
}

.jogo {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 50%;

}

.campos {
    width: 15%;
    height: 10vh;
    background: rgb(255, 255, 255);
    display: inline-block;
    border-radius: 10px;
    cursor: pointer;
    margin: 10px;
}

.jogando button {
    background: #8E2B39;
    color: #fff;
    border-radius: 15px;
    width: 30%;
    height: 10%;
    font-size: 3em;
    cursor: pointer;
}

.ganhou {
    background-image: url("../assets/diamond.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 5em;
    cursor: not-allowed;
}

.perdeu {
    background-image: url("../assets/bomb.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 5em;
    cursor: not-allowed;
}
</style>