<script setup lang="ts">
import { useSearch } from '../composables/useSearch';
const { search } = useSearch();
</script>
<template>
  <div class="wrapper">
    <input
      v-model="search"
      class="input"
    />
  </div>
</template>
<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 3rem auto 3rem;
  grid-template-rows: 3rem auto 3rem;

  border: 1px solid var(--text-color);
  background-color: var(--bg-sub-color);
  background-repeat: repeat;
}

.input {
  grid-area: 2 / 2;
  font-size: 2.5rem;
  padding: 0.5rem;
}
</style>
