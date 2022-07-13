import { createSharedComposable } from '@vueuse/core';
import { computed, ref } from 'vue';

export const useSearch = createSharedComposable(() => {
  const search = ref('');

  return {
    search,
  };
});
