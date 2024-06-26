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
      <div
        class="accordion__body"
        v-show="showElement"
        ref="accordionBody"
        :style="{ '--animation-padding': `${padding}px` }"
      >
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue'

const props = defineProps<{
  showElement?: boolean
}>()

const showElement = ref(props.showElement ?? false)
const accordionBody = ref<HTMLElement | null>(null)
const padding = 20

const handleAccordion = () => {
  showElement.value = !showElement.value
}

const updateMaxHeight = async () => {
  await nextTick()
  if (accordionBody.value) {
    const targetHeight = showElement.value
      ? `${accordionBody.value.scrollHeight + padding * 2}px`
      : '0px'
    accordionBody.value.style.maxHeight = targetHeight
  }
}
watch(showElement, updateMaxHeight)

onMounted(() => {
  updateMaxHeight()
})
</script>
<style lang="scss" scoped>
.accordion {
  width: 100%;
  border: none;
  outline: none;
  cursor: pointer;

  &__header {
    width: 100%;
    background-color: var(--secondary-bg-color);
    color: var(--title-color);
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
    background-color: var(--third-bg-color);
    border-radius: 0 0 10px 10px;
    transition: max-height 0.5s ease;
    padding: var(--animation-padding);
    overflow: hidden;
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
  max-height: auto;
  padding: var(--animation-padding);
  transition: 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  padding: 0;
}
</style>
