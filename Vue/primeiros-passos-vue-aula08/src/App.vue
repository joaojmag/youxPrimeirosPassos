<template>

  <div>
    One-way <br>
    Tow-way<br>
    v-mode -> formulários

    <div>
      <label>Nome</label><br />
      <input v-model="name" type="text"><br />
      {{ name }}
    </div>

    <div>
      <select v-model="sport">
        <option value="">Escolha</option>
        <option value="futebol">futebol</option>
        <option value="tenes">tenes</option>
        <option value="corrida">corrida</option>
      </select>
      {{ sport }}
    </div>

    <label>Newsletter</label><br />
    <input v-model="newsletter" type="radio" value="Sim">Sim
    <input v-model="newsletter" type="radio" value="Não">Não
    {{ newsletter }}

    <label>Contrato</label><br />
    <input v-model="contrato" type="checkbox">Aceita nosso termos....
    {{ contrato }}

    <label>Cores</label><br />
    <input v-model="cores" type="checkbox" value="Amarelo">Amarelo
    <input v-model="cores" type="checkbox" value="Azul">Azul
    {{ cores }}



  </div>

</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      name: 'joão',
      sport: '',
      newsletter: '',
      contrato: false,
      cores:[]
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
