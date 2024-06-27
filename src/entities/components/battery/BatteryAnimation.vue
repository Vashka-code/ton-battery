<template>
  <div
    class="battery"
    :class="{ animate: isVisible }"
    :style="{ '--animation-duration': props.animationDuration + 'ms' }"
    ref="battery"
  ></div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useIsVisisble } from './composables/useIsVisisble'

const props = defineProps<{
  animationDuration: number
}>()

const battery = ref<HTMLElement | null>(null)
const isVisible = ref(false)

useIsVisisble(battery, () => {
  isVisible.value = true
})
</script>
<style lang="scss" scoped>
.battery {
  font-size: 72px;

  @media screen and (max-width: 768px) {
    font-size: 66px;
  }

  &::before {
    font-family: 'Font Awesome 5 Free';
    content: '\f244';
    font-weight: 900;
    animation-name: battery;
    animation-duration: var(--animation-duration);
    animation-fill-mode: forwards;
    color: var(--battery-color);
    display: inline-block;
    animation-play-state: paused;
  }

  &.animate::before {
    animation-play-state: running;
  }
}

@keyframes battery {
  20% {
    content: '\f244';
    color: var(--low-battery-color);
  }
  40% {
    content: '\f243';
  }
  60% {
    content: '\f242';
  }
  80% {
    content: '\f241';
  }
  100% {
    content: '\f240';
  }
}
</style>
