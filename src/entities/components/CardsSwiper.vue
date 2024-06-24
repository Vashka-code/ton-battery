<template>
  <swiper-container
    :loop="true"
    :modules="modules"
    :autoplay="true"
    :width="'auto'"
    :delay="3000"
    :space-between="30"
    :slidesPerView="'auto'"
    class="swiper"
  >
    <swiper-slide class="swiper__slide" v-for="(item, index) in props.list" :key="index">
      <cards-list :list="[item]" />
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
    width: 50%;
  }
}
</style>
