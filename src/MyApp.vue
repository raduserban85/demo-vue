<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import SimpleJokesComponent from "./components/SimpleJokesComponent.vue";
import {onMounted, ref, Ref} from "vue";
import {Joke} from "./types/joke.ts";
import {useJoke} from "./stores/jokes-store.ts";
import {JokeStore} from "./stores/type/joke-store.ts";

const jokeStore: JokeStore = useJoke();
const myName: string = "Radu";
const jokes: Ref<Joke[]> = ref([]);

onMounted(async (): Promise<void> => {
   await jokeStore.getNextTen().then((data: Joke[]) => {
     jokes.value = data;
   });
  console.log({j: jokes.value});
});
</script>

<template>
  <!-- HelloWorld :user-name="myName" /-->
  <SimpleJokesComponent :jokes="jokes" />
</template>

<style scoped>
</style>
