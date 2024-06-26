<template>
  <swiper-container
    :modules="modules"
    :autoplay="true"
    :delay="1000"
    :space-between="30"
    :slidesPerView="'auto'"
    :loop="true"
    class="swiper"
  >
    <swiper-slide class="swiper__slide" v-for="(item, index) in props.list" :key="index">
      <card-item :item="item" />
    </swiper-slide>
  </swiper-container>
</template>
<script lang="ts" setup>
import { register } from 'swiper/element/bundle'
import { Autoplay } from 'swiper/modules'

const props = defineProps<{
  list: CardItem[]
}>()

const modules = [Autoplay]
register()
</script>
<style lang="scss" scoped>
.swiper {
  &__slide {
    width: calc(50% - 15px);
    padding: 0 10px;
  }
}
</style>
