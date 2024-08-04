<template>
    <div class="perfilUser">
        <h2>Perfil do {{ nome }}</h2>
        <p>Total de jogos {{ totaldeJogos(idJogador) }} </p>
        <p> Jogos ganhos {{ jogosGanhos(idJogador) }} | Valor recebido R$ {{ valoresGanos(idJogador) }}</p>
        <p>Jogos perdidos {{ jogosPerdidos(idJogador) }} | Valor perdido R$ -{{ valoresPerdidos(idJogador) }}</p>
    </div>
</template>

<script>
import { buscarTodosJogos, buscarTodos } from '@/components/services/api'
import { toRaw } from 'vue';

export default {


    data() {
        return {
            nome: '',
            jogos: [],
            idJogador: ''
        }
    },

    methods: {
        async buscandoTodosJogos() {
            try {
                const buscaDosJogos = await buscarTodosJogos();

                this.jogos = buscaDosJogos.data;
            } catch (error) {
                console.log("Erro ao carregar jogadores ", error);
            }
        },
        // para testar a aplicação
        async buscandoTodosUsuarios() {

            try {
                const { data } = await buscarTodos();
                this.idJogador = data[0].id;
                this.nome = data[0].nome;
            } catch (error) {
                console.log("Erro ao carregar jogadores ", error);
            }
        },
        totaldeJogos(idUser) {
            return this.dadosDoJogo(idUser).length
        },

        jogosGanhos(idJogador) {
            let vitorias = this.dadosDoJogo(idJogador).filter(e => e.vitoria === true)
            return vitorias.length
        },

        jogosPerdidos(idJogador) {
            let derotas = this.dadosDoJogo(idJogador).filter(e => e.vitoria === false)
            return derotas.length
        },

        valoresGanos(idJogador) {
            return this.dadosDoJogo(idJogador)
                .filter(e => e.vitoria === true)
                .reduce((acumulador, numeroAtual) => acumulador + numeroAtual.valorGanho, 0);
        },
        valoresPerdidos(idJogador) {
            return this.dadosDoJogo(idJogador)
                .filter(e => e.vitoria === false)
                .reduce((acumulador, numeroAtual) => acumulador + numeroAtual.valorDaAposta, 0);
        },

        dadosDoJogo(idUser) {
            return toRaw(this.jogos).filter(e => e.idDoUsuario === idUser);
        }
    },

    mounted() {
        this.buscandoTodosJogos();
        this.buscandoTodosUsuarios();
    }

}

</script>

<style>
.perfilUser {}
</style>