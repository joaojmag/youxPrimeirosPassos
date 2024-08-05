<template>
    <div class="calasseJogo">
        <h1>Vamos Jogar!!</h1>
        <form v-if="cabecalho" class="valorAposta" @submit.prevent="comecarPartida">
            <label>Valor da aposta</label>
            <input type="number" id="valor" v-model="valor" required />
            <button type="submit">Iniciar Jogo</button>
        </form>

        <div v-if="!cabecalho" class="jogando">
            <div class="jogo">
                <span v-for="num in jogo" :key="num" :id="num" class="campos" @click="cliqueParaJogar(num)">{{ num
                    }}</span>
            </div>

            <button @click="encerrarPartida">Encerrar</button>
        </div>

    </div>
</template>


<script>
import { iniciarPartida, jogando } from '@/components/services/api'


export default {
    data() {
        return {
            valor: 0,
            cabecalho: true,
            jogo: this.criarVetor(),
            idJogo: null,
            valorGanho: 0
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
                    idDoUsuario: 1253
                }
                const { data } = await iniciarPartida(partida);
                console.log('data ->', data)
                this.idJogo = data
                console.log("this.idJogo -> ", this.idJogo);

            } catch (error) {
                console.log("Erro ao criar jogo", error);
            }

        },

        async encerrarPartida() {
            this.cabecalho = !this.cabecalho

            const jogo = {
                posicaoNumClicado: 25,
                encerrar: true,
                idDoJogo: this.idJogo
            }

            const { data } = await jogando(jogo);
            console.log(data);
            this.valorGanho = data;
            console.log("this.valorGanho -> ", this.valorGanho);

        },

        async cliqueParaJogar(numero) {
            console.log(numero);

            const jogo = {
                posicaoNumClicado: numero,
                encerrar: false,
                idDoJogo: this.idJogo
            }

            const { data } = await jogando(jogo);
            if (data === 0) {
                alert("Você Perdeu")
                this.cabecalho = !this.cabecalho
            } else {
                alert("Parábens você encontrou um diamante!")
            }
        }
    }
}
</script>
<style>
.calasseJogo {
    display: flex;
    flex-direction: column;
}

.valorAposta {
    display: flex;
    flex-direction: column;
    width: 250px;
    row-gap: 15px;
}

.jogando {
    display: flex;
    flex-wrap: wrap;
    width: 500px;
    /* justify-content: center; */
}

.campos {
    width: 75px;
    height: 75px;
    background: yellow;
    display: inline-block;
    border-radius: 10px;
    cursor: pointer;
    margin: 10px;
}
</style>