<template>
  <ul class="tile-list">
    <li v-for="(item, index) in props.list" :key="index" class="tile-list__item">
      <h4 class="tile-list__title">{{ `${index + 1}. ${item.title}:` }}</h4>
      <div v-for="(block, index) in item.textBlocks" :key="index" class="tile-list__block">
        <strong>{{ block.subtitle }}: </strong> {{ block.text }}
      </div>
    </li>
  </ul>
</template>
<script lang="ts" setup>
const props = defineProps<{
  list: TileItem[]
}>()
</script>
<style lang="scss" scoped>
.tile-list {
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 40px;

  &__item {
    padding: 30px;
    border-radius: 15px;
    background-color: var(--main-bg-color);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);

    @media screen and (max-width: 768px) {
      padding: 20px;
    }
  }

  &__title {
    margin: 0;
    font-size: 30px;
    color: var(--title-color);

    @media screen and (max-width: 768px) {
      font-size: 24px;
    }
  }

  &__block {
    margin-top: 10px;

    @media screen and (max-width: 768px) {
      font-size: 14px;
    }
  }
}
</style>
