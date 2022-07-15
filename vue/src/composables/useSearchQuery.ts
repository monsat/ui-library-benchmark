import { ref } from 'vue';
import { createSharedComposable, refThrottled } from '@vueuse/core';

export const useSearchQuery = createSharedComposable(() => {
  const input = ref('');
  const word = refThrottled(input, 22);

  return {
    input,
    word,
  }
});
