<template>
  <p>
    <button @click="send('TOGGLE')">
    {{
      state.value === 'inactive'
        ? 'Click to activate'
        : 'Active! Click to deactivate'
    }}
  </button>
  </p>
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

// const toggleService = interpret(toggleMachine, { devTools: true });

export default defineComponent({
  name: 'C02',
  setup() {
    // const { state, send } = useService(toggleService);
    const { state, send } = useMachine(toggleMachine, { devTools: true });
    return {
      state,
      send
    };
  }
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
</style>
