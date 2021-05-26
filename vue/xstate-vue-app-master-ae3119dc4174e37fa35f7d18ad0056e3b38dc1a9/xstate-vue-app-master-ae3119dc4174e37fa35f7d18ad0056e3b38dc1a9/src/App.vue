<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <All />
  <Lopa />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import All from './components/All.vue'
import Lopa from './components/Lopa.vue'


export default defineComponent({
  name: 'App',
  components: {
    All,
    Lopa,
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