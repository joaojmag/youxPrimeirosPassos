<template>
    <div class="perfiladm">
        <h3>Total de jogos feitos: </h3>
        {{ numerodeJogos() }}

        <h3>Usuarios</h3>
        <div id="dadosUsuarios" v-for="item in jogadores" :key="item.id">
            <span> <strong> Nome: </strong> {{ item.nome }}</span>
            <span> <strong> Valores ganhos: </strong> R$ {{ valorganho(item.id) }} </span>
            <button @click="blockDesblock(item.id)">
                {{ atualizarBtn(item.id) ? "Desbloquear Usuario" : "Bloquear Usuario"
                }}</button>
        </div>

    </div>
</template>


<script>
import { buscarTodos, buscarTodosJogos, bloquearUsuario } from '@/components/services/api'
import { toRaw } from 'vue';

export default {
    data() {
        return {
            jogadores: [],
            jogos: []
        }
    },

    methods: {
        async buscandoTodosUsuarios() {

            try {
                const jogadores = await buscarTodos();

                this.jogadores = jogadores.data;
            } catch (error) {
                console.log("Erro ao carregar jogadores ", error);
            }
        },

        async buscandoTodosJogos() {
            try {
                const buscaDosJogos = await buscarTodosJogos();

                this.jogos = buscaDosJogos.data;
            } catch (error) {
                console.log("Erro ao carregar jogadores ", error);
            }
        },

        valorganho(idUser) {
            let vetValores = toRaw(this.jogos).filter(e => e.idDoUsuario === idUser)
            return vetValores.reduce((acumulador, numeroAtual) => acumulador + numeroAtual.valorGanho, 0);
        },

        async blockDesblock(idUsuario) {
            await bloquearUsuario(idUsuario);
            this.buscandoTodosUsuarios();
        },

        atualizarBtn(idDoUsuario) {
            let vetValores = toRaw(this.jogadores).find(e => e.id === idDoUsuario)
            return vetValores.bloqueado;
        },

        numerodeJogos() {
            return toRaw(this.jogos).length;
        }
    },

    mounted() {
        this.buscandoTodosUsuarios();
        this.buscandoTodosJogos();
    }
}

</script>


<style>
#dadosUsuarios {
    width: 250px;
    display: flex;
    flex-direction: column;
    margin: 10px;
}

#dadosUsuarios button {
    cursor: pointer;
}
</style>