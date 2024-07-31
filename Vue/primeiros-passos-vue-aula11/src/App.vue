<template>
  <div>

    <input v-model="name" type="text"><br>

    {{ name }}

    <br>
    <br>
    <br>
    <input v-model="user.frist_name" type="text"><br>
    <input v-model="user.last_name" type="text">

    <select v-model="pageCount">
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
    </select>
    {{ pageCount }}

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      name: '',
      pageCount: 5,
      user: {
        frist_name: '',
        last_name: ''
      }

    }
  },
  watch: {
    name(novoValor, velhoValor) {
      console.log(novoValor, velhoValor);
      if (novoValor.length >= 3) {
        this.mostraValor();
      }
    },
    pageCount() {
      this.changePage();
    },
    user: {
      handler() {
        console.log('user alterado');
      },
      deep: true
    }
  },

  computed: {
  },

  methods: {
    mostraValor() {
      console.log('mostrar');
    },
    changePage() {
      console.log('Ajax');
    }

  }
}
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
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
}
</style>
