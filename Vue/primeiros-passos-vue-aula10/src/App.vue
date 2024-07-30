<template>
  <div>
    <button v-on:click="capitura()">
      Enviar
    </button>

    <button @click="outraforma">
      Outra forma
    </button>

    <button @mouseover="mouseOver()" @mouseout="mouseOut()">
      mouseOver
    </button>

    <button @mouseout="mouseOut()">
      mouseOver
    </button>
    <br />

    <form action="https://google.com" v-on:submit.prevent="onSubmit">
      <input type="text" v-on:keyup.enter="onKyuo">

      <button type="submit">Enviar</button>

    </form>


  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {

    }
  },
  methods: {
    capitura() {
      console.log('click :>> ');
    },
    outraforma($evt) {
      console.log('oura forma :>> ', $evt);
    },
    mouseOver() {
      console.log('mouseOver');
    },
    mouseOut() {
      console.log('mouseOut');
    },
    onSubmit() {
      console.log("submite");
    },
    onKyuo(evento) {
      console.log('onKyuo', evento);
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
