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
    voltarMenu(){
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
      <MenuUsuario v-else @click='openMenu' />
    </div>
  </header>
  <RouterView />
  <RouterLink to="/">Tela de login</RouterLink>
  <RouterLink to="/cadastro">Tela de cadastro</RouterLink>
  <RouterLink to="/perfiladm">Perfil ADM</RouterLink>
  <RouterLink to="/perfilusuario">Perfil do Usuário</RouterLink>
  <RouterLink to="/jogo">Jogo</RouterLink>
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

#menuUsuario{
  position: absolute;
  width: 100;
  height: 100vh;
  z-index: 1;
}
</style>

<!-- <nav>
  <RouterLink to="/">Tela de login</RouterLink>
  <RouterLink to="/cadastro">Tela de cadastro</RouterLink>
  <RouterLink to="/perfiladm">Perfil ADM</RouterLink>
  <RouterLink to="/perfilusuario">Perfil do Usuário</RouterLink>
  <RouterLink to="/jogo">Jogo</RouterLink>
</nav> -->
<!-- <style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style> -->
