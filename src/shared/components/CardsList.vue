<template>
  <ul class="list">
    <li v-for="(item, index) in props.list" :key="index" class="list__item">
      <card-item :item="item" />
    </li>
  </ul>
</template>

<script setup lang="ts">
const props = defineProps<{
  list: CardItem[]
}>()
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
  padding: 0;
  margin: 0;
  list-style: none;

  &__item {
    width: 48%;
  }
}
</style>
