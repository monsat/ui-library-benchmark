<script setup lang="ts">
import { useItem } from '../composables/useItem';

const props = defineProps<{
  /**
   * ID of item
   */
  id: string;
}>();

const { item, unmatched, prefix, mark, suffix } = useItem(props.id);
</script>
<template>
  <div v-if="item" class="wrapper">
    <div class="id">{{ id }}</div>
    <div class="name">
      <span v-if="mark" v-memo="[mark]">
        {{ prefix }}<mark>{{ mark }}</mark>{{ suffix }}
      </span>
      <span v-else :class="{unmatchedName: unmatched}" v-memo="[unmatched]">
        {{ item.en }}
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

.name mark {
  font-weight: bold;
}

.unmatchedName {
  color: var(--text-sub-color);
}
</style>
