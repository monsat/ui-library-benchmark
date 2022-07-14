import { createSharedComposable, refThrottled } from '@vueuse/core';
import { ref } from 'vue';

export const useSearch = createSharedComposable(() => {
  const search = ref('');
  const throttledSearch = refThrottled(search, 100);

  return {
    search,
    throttledSearch,
  };
});
