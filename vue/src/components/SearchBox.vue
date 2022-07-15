<script setup lang="ts">
import { nextTick } from 'vue';

defineProps<{
  /**
   * Current input
  */
 modelValue: string;
}>()
const emit = defineEmits<{
  /**
   * Input change
  */
  (ev: 'update:modelValue', value: string): void;
}>()

async function onInput(ev: Event) {
  await nextTick();
  emit('update:modelValue', (ev.target as HTMLInputElement).value);
}
</script>
<template>
  <div class="wrapper">
    <input
      type="text"
      class="input"
      :value="modelValue"
      @input="onInput"
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