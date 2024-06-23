<template>
  <ul class="list">
    <li v-for="(item, index) in props.list" :key="index" class="item">
      <font-awesome-icon :icon="item.icons" class="item__icon" />
      <div class="item__content">
        <span class="item__title">{{ item.title }}:</span>
        <span class="item__text">{{ item.text }}</span>
      </div>
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
}

.item {
  display: flex;
  width: 48%;
  padding: 30px;
  border-radius: 15px;
  margin: 0;
  background-color: #0a121d;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);

  &__title {
    font-size: 24px;
    color: #fff;
    font-weight: 500;
  }

  &__text {
    display: block;
  }

  &__content {
    margin-top: -10px;
    margin-left: 20px;
  }

  &__icon {
    // color: #fff;
    color: rgb(69, 174, 245);
    font-size: 26px;
  }
}
</style>
