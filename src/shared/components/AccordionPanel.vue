<template>
  <div class="accordion" @click="handleAccordion">
    <div class="accordion__header">
      <slot name="title"></slot>
      <font-awesome-icon
        icon="fa-solid fa-chevron-down"
        class="accordion__icon"
        :class="{ active: showElement }"
      />
    </div>
    <transition name="fade">
      <div class="accordion__body" v-if="showElement">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  showElement: boolean
}>()

const showElement = ref(props.showElement || false)

const handleAccordion = () => {
  showElement.value = !showElement.value
}
</script>
<style lang="scss" scoped>
.accordion {
  width: 100%;
  border: none;
  outline: none;
  cursor: pointer;

  &__header {
    width: 100%;
    background-color: #070f1b;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    text-transform: capitalize;
    font-size: 22px;
    font-weight: 600;
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.75);
    position: relative;
    z-index: 3;
    border-radius: 10px 10px 0 0;
  }

  &__body {
    border-top: 2px solid #000;
    background-color: #0a111b;
    padding: 20px;
    border-radius: 0 0 10px 10px;
  }

  &__icon {
    transition: 0.3s ease;
    transform-origin: center;

    &.active {
      transform: rotate(180deg);
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
