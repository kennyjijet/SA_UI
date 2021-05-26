<template>
  <img alt="Vue logo" src="../assets/logo.png" />
  <h1>01</h1>
  <C01 />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import C01 from '../components/C01.vue'

export default defineComponent({
  name: 'App',
  components: {
    C01
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