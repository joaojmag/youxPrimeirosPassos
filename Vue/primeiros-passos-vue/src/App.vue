<script>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
import TheHeader from './components/TheHeader.vue';

export default {

  name: 'App',
  components: {
    // HelloWorld,
    // TheWelcome,
    TheHeader
  },
  data() {
    return {
      elementoteste: true,
      name: "Joaoa",
      valor: 2,
      imgAlt: "exemplo de valor dinamico",
      imgLink: "https://placehold.co/600x400/png",
      classvar: "title",
      isHome: false,
      pClasse: 'text',
      todos: [
        {
          "userId": 1,
          "id": 1,
          "title": "delectus aut autem",
          "completed": false,
          "imgLink": "https://placehold.co/600x400/png"
        },
        {
          "userId": 1,
          "id": 2,
          "title": "quis ut nam facilis et officia qui",
          "completed": false,
          "imgLink": "https://placehold.co/600x400/png"
        },
        {
          "userId": 1,
          "id": 3,
          "title": "fugiat veniam minus",
          "completed": false
        },
        {
          "userId": 1,
          "id": 4,
          "title": "et porro tempora",
          "completed": true
        },
        {
          "userId": 1,
          "id": 5,
          "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
          "completed": false
        }
      ]
    }
  }

}


</script>

<template>
  <header>
    <TheHeader v-if="elementoteste" />
    <div v-show="elementoteste">nome: {{ name }}</div>

    <div v-if="valor === 1">o primeiro</div>
    <div v-else-if="valor === 2">o segunda</div>
    <div v-else="valor > 2">tanto faz</div>

    <h1 v-bind:class="{ 'title': true, 'title-home': isHome }">Opaaa</h1>

    <p v-bind:class="['text', {'title': true, 'title-home': isHome}]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus porro recusandae in dolores sunt amet, sint fuga
      deleniti dolorum eligendi inventore laudantium, exercitationem cupiditate veniam mollitia! Ratione repellendus
      maiores sit? </p>

<p :style="{'color': 'aqua', 'background': 'black', fontSize: '20px'}">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aspernatur dolorum magnam enim voluptatum iusto molestiae ad sed velit, officiis qui optio corporis doloribus tempora eius iure, dolorem non possimus.</p>

    <div v-for="(obj, index) in todos" v-bind:key="obj.id" class="todos-itens">

      {{ obj.title }} {{ index }}
      <img v-if="obj.imgLink" v-bind:src="obj.imgLink">

    </div>

    <div>
      <img v-bind:src="imgLink" v-bind:alt="imgAlt">


    </div>

    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
.todos-itens {
  background: #000;
  margin: 0 0 5px 0;
  padding: 3px 6px;
  color: #ffffff;
}

.title {
  font-size: 20px;
  color: #0080f8;
}

.title-home {
  font-size: 40px;
  color: #5eff00;
}

.text{
  color: #5eff00;
}

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
