<template>
  <header class="header" ref="header">
    <div class="header__content">
      <img src="./assets/ton-logo.svg" alt="" />
      <div class="battery" :style="{ '--animation-duration': animationDuration + 'ms' }"></div>
      <battery-animation :animationDuration="animationDuration" />
      <div class="header__feature">{{ featureText }}</div>
    </div>
    <demarcation-line></demarcation-line>
  </header>
</template>

<script setup lang="ts">
import BatteryAnimation from '@/entities/components/battery/BatteryAnimation.vue'
import { useIsVisisble } from '@/shared/composables/useIsVisisble'
import { ref } from 'vue'
import { useTypeAnimation } from './composable/useTypeAnimation'

const featureText = ref('')
const featureFinalText = 'New Tonkeeper feature - battery'
const typingDelay = 100
const header = ref<HTMLElement | null>(null)

const animationDuration = ref(typingDelay * (featureFinalText.length + 2))

useIsVisisble(header, () => {
  useTypeAnimation(featureFinalText, typingDelay, (text) => {
    featureText.value = text
  })
})
</script>

<style scoped lang="scss">
.header {
  --animation-duration: 3.5ms;
  height: 100dvh;
  padding: 20px 0;

  &::before {
    content: '';
    position: absolute;
    pointer-events: none;
    display: flex;
    flex-direction: row;
    aspect-ratio: 1 / 1;
    width: 100%;
    height: auto;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      #0098ea 0%,
      #1ac9ff 30%,
      rgba(26, 201, 255, 0.3) 50%,
      hsla(0, 0%, 100%, 0) 100%
    );
    filter: blur(50px);
    top: 0;
    z-index: 0;
    transform: translateY(-80%);
  }

  &__content {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 2;
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: center;
    flex-direction: column;

    @media screen and (max-width: 700px) {
      gap: 12px;
    }
  }

  &__feature {
    font-size: 80px;
    font-weight: 700;
    line-height: 1.2;
    color: var(--battery-color);
    max-width: 90%;
    text-align: center;

    @media screen and (max-width: 1400px) {
      font-size: 70px;
    }

    @media screen and (max-width: 1200px) {
      font-size: 60px;
    }

    @media screen and (max-width: 560px) {
      font-size: 38px;
    }

    &::after {
      content: '|';
      animation: feature_cursor 1.1s infinite step-start;
      display: inline-block;
      width: 6px;
      border-radius: 3px;
      font-weight: 300;
      background-color: var(--accentBlue);
    }
  }
}

@keyframes feature_cursor {
  50% {
    opacity: 0;
  }
}
</style>
