<script setup lang="ts">
import { Ref, ref, toRef } from 'vue'

interface Props {
  userName: string;
}

const props: Props = defineProps<Props>();
const userName: Ref<string> = toRef(props, "userName");
const count: Ref<number> = ref(0);

</script>

<template>
  <h1>Hello {{ userName }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>

<style scoped>
</style>
