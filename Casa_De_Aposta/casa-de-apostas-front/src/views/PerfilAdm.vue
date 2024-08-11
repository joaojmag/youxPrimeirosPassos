<template>
    <div class="perfiladm">

        <div class="stiloPerfilAdmin">

            <span>
                <h3>Total de jogos feitos: </h3>
                <p style="font-size: 2em; margin-left: 1em;"> {{ numerodeJogos() }}</p>
            </span>

            <h3>Usuarios</h3>
            <div id="dadosUsuarios" class="dadosUsuarios" v-for="item in jogadores" :key="item.id">
                <span> <strong style="font-size: 1.2em; margin-right: 1em;"> Nome: </strong>
                    <p style="font-size: 1.2em;">{{ item.nome }}</p>
                </span>
                <span> <strong style="font-size: 1.2em; margin-right: 1em;"> Valores ganhos: </strong> R$ {{
                    valorganho(item.id) }} </span>
                <button @click="blockDesblock(item.id)">
                    {{ atualizarBtn(item.id) ? "Desbloquear Usuario" : "Bloquear Usuario"
                    }}</button>
            </div>
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


<style scoped>
.perfiladm {
    width: 100%;
    min-height: 92vh;
    background: #D9D9D9;
    display: flex;
    align-items: center;
    justify-content: center;
}

.stiloPerfilAdmin {
    width: 80%;
}

.stiloPerfilAdmin h3 {
    color: #8E2B39;
    font-size: 2em;
}

.stiloPerfilAdmin span {
    display: flex;
    align-items: center;
}

.dadosUsuarios {
    display: flex;
    flex-direction: column;
    margin: 2em;
    padding: 1em;
    gap: 0.5em;
    border: 3px solid #8E2B39;
    border-radius: 15px;
}

.dadosUsuarios button {
    cursor: pointer;
    background: #8E2B39;
    height: 3em;
    color: #fff;
    font-size: 1em;
    border-radius: 50px;
}

/* .dadosUsuarios {
    width: 250px;
    display: flex;
    flex-direction: column;
    margin: 10px;
}

.dadosUsuarios button {
    cursor: pointer;
} */
</style>