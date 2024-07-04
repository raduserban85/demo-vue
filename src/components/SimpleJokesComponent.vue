<script setup lang="ts">
import { ref, toRef } from 'vue';
import { Joke } from '../types/joke';

interface Props {
  jokes: Joke[];
}

const props: Props = defineProps<Props>();
const jokes = toRef(props, 'jokes');

function togglePunchlineVisibility(joke: Joke) {
  joke.isPunchlineVisible = !joke.isPunchlineVisible;
}
</script>

<template>
  <h1>Jokes</h1>
  <ul>
    <li v-for="joke in jokes" :key="joke.id">
      <p>{{ joke.setup }}</p>
      <i v-if="joke.isPunchlineVisible">{{ joke.punchline }}</i>
      <button @click="togglePunchlineVisibility(joke)">
        {{ joke.isPunchlineVisible ? 'Hide' : 'Show' }}
      </button>
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 1em;
}

button {
  margin-top: 0.5em;
  cursor: pointer;
}
</style>
