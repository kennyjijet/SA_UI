<template>
  <img alt="Vue logo" src="../assets/logo.png" />
  <h1>[[index]]</h1>
  <C[[index]] />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import C[[index]] from '../components/C[[index]].vue'

export default defineComponent({
  name: 'App',
  components: {
    C[[index]]
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>