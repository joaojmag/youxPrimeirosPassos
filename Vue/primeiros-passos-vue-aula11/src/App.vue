<template>
  <div>
    {{ user.frist_name + " " + user.last_name }}
    <button v-on:click="clicando">Clicar</button><br>

    {{ fullName }}<br>

    <div v-for="i in todosNaoCompletadas" v-bind:key="i.id">
      {{ i.title }}

    </div>
    <br>
    <br>
    <br>

    <div v-for="i in todosCompletadas" v-bind:key="i.id">
      {{ i.title }}
    </div>

    <h2>Todos</h2>
    <div v-for="i in todos" v-bind:key="i.id">
      <input type="checkbox" v-model="i.completed">
      {{ i.title }}
    </div>



  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      user: {
        frist_name: 'jaoa',
        last_name: 'marcelo'
      },
      todos: [
        {
          "userId": 1,
          "id": 1,
          "title": "delectus aut autem",
          "completed": false
        },
        {
          "userId": 1,
          "id": 2,
          "title": "quis ut nam facilis et officia qui",
          "completed": false
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
  },
  computed: {
    fullName() {
      return `${this.user.frist_name} ${this.user.last_name}`
    },
    todosNaoCompletadas() {
      return this.todos.filter(e => !e.completed);
    },
    todosCompletadas() {
      return this.todos.filter(e => e.completed);
    }
  },
  methods: {
    clicando() {
      console.log(this.user);
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
