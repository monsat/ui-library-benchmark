<script setup lang="ts">
import { computed } from 'vue';
import { itemMap } from '../data/items';
import { useSearchQuery } from '../composables/useSearchQuery';

const props = defineProps<{
  /**
   * ID of item
   */
  id: string;
}>();

const item = computed(() => itemMap.get(props.id));

const { word } = useSearchQuery();

const nameMarked = computed(() => {
  const i = item.value;
  if (!i) {
    return undefined;
  }
  if (!word.value) {
    return {
      unmatched: false,
      prefix: i.en,
      mark: "",
      suffix: "",
    }
  }
  const name = i.en.toLowerCase();
  const searchIndex = name.indexOf(word.value);
  if (searchIndex === -1) {
    return {
      unmatched: true,
      prefix: i.en,
      mark: "",
      suffix: "",
    }
  }
  return {
    unmatched: false,
    prefix: i.en.substring(0, searchIndex),
    mark: i.en.substring(searchIndex, searchIndex + word.value.length),
    suffix: i.en.substring(searchIndex + word.value.length),
  };
})
</script>
<template>
  <div class="wrapper" v-if="item && nameMarked">
    <div class="id">{{ id }}</div>
    <div>
      <span :class="['name', {unmatchedName: nameMarked.unmatched}]">
        {{ nameMarked.prefix }}<mark v-if="nameMarked.mark">{{ nameMarked.mark }}</mark>{{ nameMarked.suffix }}
      </span>
    </div>
    <div>{{ item.ja }}</div>
  </div>
</template>
<style scoped>
.wrapper {
  background-color: var(--bg-sub-color);
}

.id {
  color: var(--text-sub-color);
}

.name > mark {
  font-weight: bold;
}

.unmatchedName {
  color: var(--text-sub-color);
}
</style>