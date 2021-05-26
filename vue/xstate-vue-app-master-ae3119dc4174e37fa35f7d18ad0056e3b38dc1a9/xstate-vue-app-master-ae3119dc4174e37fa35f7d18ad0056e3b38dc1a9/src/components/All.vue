<template>
  <ul>
      <li><a href='sub/ex01.html' target="_blank">Ex1</a></li>
      <li><a href='sub/ex02.html' target="_blank">Ex2</a></li>
  </ul>
</template>
<script lang="ts">

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'All',
//   setup: () => {
//     const items = ref(0)
//     return { items }
//   }
});
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}

li {
  list-style-type: none;
}
</style>
