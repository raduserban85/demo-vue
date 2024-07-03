<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
const myName: string = "Radu";
</script>

<template>
  <HelloWorld :user-name="myName" />
</template>

<style scoped>
</style>
