<template>
  <div>
    <TheHeader>
      <template v-slot:home>
        <h1>Home</h1>
      </template>

      <template v-slot:descricao>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, autem porro debitis accusantium saepe corrupti
          voluptas maiores odio quisquam, suscipit modi sint sed omnis sit eveniet magnam quidem earum! Repellendus!</p>
      </template>

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quisquam incidunt placeat ab omnis facere
        commodi, modi excepturi ea reiciendis! Exercitationem aperiam blanditiis ipsam veniam voluptatum quis similique,
        sapiente tempora.

    </TheHeader>


  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';


export default {

  name: 'App',
  components: {
    TheHeader
  },
  data() {
    return {
    }
  },
  watch: {

  },

  computed: {
  },

  methods: {

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
