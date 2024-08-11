<template>
    <div class="menuUser">
        <div class="stiloMenu">
            <div class="menuDiv" @click="paraPropagacao($event)">
                Olá {{ nome }}
                <p v-if="role === 'ADMIN'" @click="pgAdmin()">Administrar Usuários <img src="../assets/group.svg"> </p>
                <img title="clique para sair da conta." @click="clicando" src="../assets/logout.svg">
            </div>
        </div>
    </div>
</template>

<script>
import { infomacesToken } from '@/components/services/api'

export default {
    name: 'MenuUsuario',
    data() {
        return {
            nome: infomacesToken().name,
            role: infomacesToken().roles
        }
    },
    methods: {
        clicando() {
            this.$router.push('/');
            this.$emit('fecharModal')

        },
        pgAdmin() {
            this.$router.push('/perfiladm');
            this.$emit('fecharModal')
        },

        voltarMenu() {
            this.$router.push('/perfilusuario');
        },
        paraPropagacao(event) {
            event.stopPropagation();
        }
    }

}
</script>
<style>
.menuUser {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 1;
}

.stiloMenu {
    width: 100%;
    display: flex;
    justify-content: end;
}

.stiloMenu img {
    cursor: pointer;
    width: 28px;
}

.menuDiv {
    width: 200px;
    height: 220px;
    border: 3px solid #77222d;
    margin: 3%;
    border-radius: 20px;
    background: #8e2b38f5;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    z-index: 10;
}

.menuDiv p {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
}
</style>