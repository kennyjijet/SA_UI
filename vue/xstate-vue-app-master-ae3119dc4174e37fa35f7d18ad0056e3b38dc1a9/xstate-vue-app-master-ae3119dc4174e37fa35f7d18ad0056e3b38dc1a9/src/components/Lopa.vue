<template>
    <div style="width: 100%;">
        <div style="overflow: hidden; margin: 0px auto; width: 600px; height: 100vh; background: red;">
        <div style="height: 20%; background: gray;"></div>
        <div style="overflow-x: hidden; overflow-y: scroll; height: 70%; background: green">
            <div style="height: 1000px; background: cyan"></div>
        </div>
        <div style="height: 10%; background: blue"></div>
        </div>
    </div>
</template>
<script lang="ts">

import { Machine } from 'xstate';
import { useMachine } from '@xstate/vue';
import { inspect } from '@xstate/inspect';

import { defineComponent } from 'vue'
inspect({
  // options
  // url: 'https://statecharts.io/inspect', // (default)
  iframe: false // open in new window
});

const toggleMachine = Machine({
  id: 'toggle',
  initial: 'inactive',
  states: {
    inactive: {
      on: { TOGGLE: 'active' }
    },
    active: {
      on: { TOGGLE: 'inactive' }
    }
  }
});
export default defineComponent({
  name: 'Lopa',
    setup: () => {
    }
});
</script>
<style scoped>

</style>
