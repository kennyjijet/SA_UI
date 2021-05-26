<template>
  <img alt="Vue logo" src="../assets/logo.png" />
  <h1>02</h1>
  <C02 />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import C02 from '../components/C02.vue'

export default defineComponent({
  name: 'App',
  components: {
    C02
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