<template>
  <div class="about">
    <h1>This is an about page</h1>
    <br>

    {{ $route }}
  </div>
</template>

<script>
export default {
  created(){
    console.log(this.$route.matched[0].name);
    console.log(this.$router);
  }
}
</script>

<style >
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
