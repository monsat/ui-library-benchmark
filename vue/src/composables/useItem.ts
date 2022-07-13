import { readonly, ref, watch } from 'vue';
import { itemMap } from './useItems';
import { useSearch } from './useSearch';

const { search } = useSearch();

export const useItem = (id: string) => {
  const item = Object.freeze(itemMap.get(id));

  const unmatched = ref(false);
  const prefix = ref('');
  const mark = ref('');
  const suffix = ref('');

  watch(search, (current, prev) => {
    if (current !== prev && item) {
      const searchIndex = item.en.toLowerCase().indexOf(current);
      unmatched.value = searchIndex === -1;
      prefix.value = !unmatched.value && item.en.substring(0, searchIndex) || '';
      mark.value = !unmatched.value && item.en.substring(searchIndex, searchIndex + current.length) || '';
      suffix.value = !unmatched.value && item.en.substring(searchIndex + current.length) || '';
    }
  });

  return {
    item,
    unmatched,
    prefix,
    mark,
    suffix,
  };
};
