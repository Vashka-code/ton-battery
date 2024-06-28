<template>
  <div class="item">
    <font-awesome-icon :icon="props.item.icons" class="item__icon" />
    <div class="item__content">
      <span class="item__title">{{ props.item.title }}:</span>
      <span class="item__text">{{ props.item.text }}</span>
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps<{
  item: CardItem
}>()
</script>
<style lang="scss" scoped>
.item {
  display: flex;
  width: 100%;
  padding: 30px;
  border-radius: 15px;
  margin: 0;
  background-color: var(--main-bg-color);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);

  @media screen and (max-width: 768px) {
    padding: 20px;
  }

  &__title {
    font-size: 24px;
    color: var(--title-color);
    font-weight: 500;

    @media screen and (max-width: 768px) {
      font-size: 22px;
    }
  }

  &__text {
    display: block;

    @media screen and (max-width: 768px) {
      font-size: 14px;
    }
  }

  &__content {
    margin-top: -10px;
    margin-left: 20px;
  }

  &__icon {
    color: rgb(69, 174, 245);
    font-size: 26px;

    @media screen and (max-width: 768px) {
      max-width: 26px;
    }
  }
}
</style>
