<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  msg: string;
  option?: string;
}>()


const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  TEST

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
  <h5>
    {{ option }}
  </h5>
</template>

<style scoped>
h1 {
  color: #7e22ce;
}
</style>