<template>
    <div class="perfilUser">

        <div class="valores">
            <div class="aba1"><strong>Vitórias: <p> {{ vitorias }}</p> </strong>
                <strong>Derotas: <p>{{ derotas }}</p></strong>
            </div>
            <div class="aba2"><strong>Saldo: <p>R$ {{ ver ? saldo?.toFixed(2) : '-----------' }}</p></strong>
                <img v-if="ver" @click="visualizar" src="../assets/Eye.svg" alt="">
                <img v-else="ver" @click="visualizar" src="../assets/Eye_off.svg" alt="">
            </div>
        </div>

        <div class="historico">
            <h2>HISTÓRICO</h2>
            <div class="cabecalho">
                <p>Data</p>
                <p>Aposta</p>
                <p>Quantidade de Acertos</p>
                <p>Resultado</p>
            </div>
            <span class="corpo" v-for="item in jogosDoUsuario" :key="item.id">
                <p>{{ item.dataJogo }}</p>
                <p>R$ {{ item.valorDaAposta.toFixed(2) }}</p>
                <p>{{ item.numeroDiamantes }}</p>
                <p>{{ item.vitoria ? 'Vitória' : 'Derota' }}</p>
            </span>
        </div>

        <!-- <h2>Perfil do {{ nome }}</h2>
        <p>Total de jogos {{ totaldeJogos(idJogador) }} </p>
        <p> Jogos ganhos {{ jogosGanhos(idJogador) }} | Valor recebido R$ {{ valoresGanos(idJogador) }}</p>
        <p>Jogos perdidos {{ jogosPerdidos(idJogador) }} | Valor perdido R$ -{{ valoresPerdidos(idJogador) }}</p> -->

        <div class="paginacao">
            <el-pagination @current-change="handlePageChange" :current-page="currentPage" :page-size="pageSize"
                layout="prev, pager, next" :total="totalItems">
            </el-pagination>
        </div>

        <button @click="irJogo">Novo Jogo</button>
    </div>
</template>

<script>
import { buscarTodosJogos, parseJwt, jogosPorPagina } from '@/components/services/api'
import { toRaw } from 'vue';
import { ElPagination } from 'element-plus';
import 'element-plus/dist/index.css';

export default {
    components: {
        ElPagination
    },

    data() {
        return {
            // nome: parseJwt().name,
            // jogos: [],
            idJogador: parseJwt().id,
            currentPage: 1,  // Página atual
            pageSize: 5,    // Itens por página
            totalItems: 0,   // Número total de itens
            jogosDoUsuario: [],
            vitoriaEvalores: [],
            vitorias: 0,
            derotas: 0,
            saldo: 0,
            ver: true
        }
    },

    methods: {
        // async buscandoTodosJogos() {
        //     try {
        //         const buscaDosJogos = await buscarTodosJogos();

        //         this.jogos = buscaDosJogos.data;
        //     } catch (error) {
        //         console.log("Erro ao carregar jogadores ", error);
        //     }
        // },

        // totaldeJogos(idUser) {
        //     return this.dadosDoJogo(idUser).length
        // },

        // jogosGanhos(idJogador) {
        //     let vitorias = this.dadosDoJogo(idJogador).filter(e => e.vitoria === true)
        //     return vitorias.length
        // },

        // jogosPerdidos(idJogador) {
        //     let derotas = this.dadosDoJogo(idJogador).filter(e => e.vitoria === false)
        //     return derotas.length
        // },

        // valoresGanos(idJogador) {
        //     return this.dadosDoJogo(idJogador)
        //         .filter(e => e.vitoria === true)
        //         .reduce((acumulador, numeroAtual) => acumulador + numeroAtual.valorGanho, 0);
        // },
        // valoresPerdidos(idJogador) {
        //     return this.dadosDoJogo(idJogador)
        //         .filter(e => e.vitoria === false)
        //         .reduce((acumulador, numeroAtual) => acumulador + numeroAtual.valorDaAposta, 0);
        // },

        // dadosDoJogo(idUser) {
        //     return toRaw(this.jogos).filter(e => e.idDoUsuario === idUser);
        // },
        irJogo() {
            this.$router.push('/jogo')
        },
        handlePageChange(page) {
            this.currentPage = page;
            this.pegarJogosPorPagina();
        },

        async pegarJogosPorPagina() {
            const dadosJogo = {
                id: this.idJogador,
                numeroDaPagina: this.currentPage
            }

            const { data } = await jogosPorPagina(dadosJogo);
            this.totalItems = data.totalPaginas;
            this.jogosDoUsuario = data.jogos;
            this.vitoriaEvalores = data.vitoriasEvalore;
            this.vitorias = data.vitoriasEvalore[1]?.count;
            this.derotas = data.vitoriasEvalore[0]?.count;
            this.saldo = data.vitoriasEvalore[1]?.sum;
        },
        visualizar() {
            this.ver = !this.ver
        }
    },

    mounted() {
        // this.buscandoTodosJogos();
        this.pegarJogosPorPagina();
    }

}

</script>

<style scoped>
.perfilUser {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: #D9D9D9;
}

.perfilUser button {
    background: #8E2B39;
    color: #fff;
    border-radius: 15px;
    width: 30%;
    height: 10%;
    font-size: 3em;
    cursor: pointer;
}

/* ------------------- */

.historico {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    border-radius: 15px;
    width: 90%;
    padding: 1%;
}

.cabecalho {
    display: flex;
    justify-content: space-around;
    background: #D9D9D9;
    border: 1px solid black;
    width: 100%;
}

.corpo {
    display: flex;
    justify-content: space-around;
    background: #fff;
    border-bottom: 1px solid black;
    border-right: 1px solid black;
    border-left: 1px solid black;
    width: 100%;
}

.valores {
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.aba1,
.aba2 {
    display: flex;
    justify-content: space-around;
    background: #fff;
    border-radius: 8px;
    width: 40%;
    padding: 1%;
}

.aba1 p,
.aba2 p {
    font-family: Inter;
    font-size: 30px;
    font-style: italic;
    font-weight: 700;
    line-height: 36.31px;
    color: rgb(100, 100, 100);
}

.aba2 img {
    width: 10%;
    cursor: pointer;
}

.cabecalho p,
.corpo p {
    flex: 1;
    text-align: center;
}
</style>
