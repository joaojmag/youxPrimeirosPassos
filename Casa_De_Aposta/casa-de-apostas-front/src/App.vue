<script>
import { RouterLink, RouterView } from 'vue-router'
import MenuUsuario from './views/MenuUsuario.vue'

export default {
  name: 'App',
  components: {
    MenuUsuario
  },

  data() {
    return {
      mostar: true
    }
  },
  methods: {
    openMenu() {
      this.mostar = !this.mostar;
    },
    voltarMenu() {
      this.$router.push('/perfilusuario');

    }
  }
}
</script>

<template>
  <header v-if="$route.meta.showHeader">
    <div class="classHeader">
      <h2 title="Voltar para o seu perfil." @click="voltarMenu">BLAZE YOUX</h2>
      <img v-if="mostar" @click="openMenu" src="./assets/accountCircle.svg">
      <MenuUsuario v-else @click='openMenu' @fecharModal="openMenu" />
    </div>
  </header>

  <RouterView />


</template>

<style scoped>
.classHeader {
  width: 100%;
  height: 8vh;
  background: #8E2B39;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.classHeader h2 {
  padding-left: 3%;
  color: #ffffff;
  cursor: pointer;
}

.classHeader img {
  padding-right: 3%;
  width: 50px;
  cursor: pointer;
}

#menuUsuario {
  position: absolute;
  width: 100;
  height: 100vh;
  z-index: 1;
}
</style>

<!-- Usando slot props -->
<!-- <router-view v-slot="{ Component }">
  <transition name="fade" mode="in-out">
    <component :is="Component" />
    </transition>

    /* .fade-enter-active,
    .fade-leave-active {
      transition: opacity 0.5s ease;
      } */
      
      /* .fade-leave-active in <2.1.8 */
      /* .fade-enter,
      .fade-leave-to {
        opacity: 0;
        } */
    </router-view> -->


<!-- <nav>
      <RouterLink to="/">Tela de login</RouterLink>
  <RouterLink to="/cadastro">Tela de cadastro</RouterLink>
  <RouterLink to="/perfiladm">Perfil ADM</RouterLink>
  <RouterLink to="/perfilusuario">Perfil do Usuário</RouterLink>
  <RouterLink to="/jogo">Jogo</RouterLink>
</nav> -->