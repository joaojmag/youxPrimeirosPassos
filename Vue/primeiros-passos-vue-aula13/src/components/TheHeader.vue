<template>
  <header class="header">
    <slot name="home"></slot>
    <slot name="descricao"></slot>
    <slot></slot>

  </header>
</template>

<script>
export default {

}
</script>

<style>
.header {
  background: #ff0202;
  color: #1dcf3b;
}
</style>
