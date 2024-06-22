<template>
  <header class="header">
    <div class="header__content">
      <img src="./assets/ton-logo.svg" alt="" />
      <div class="battery" :style="{ '--animation-duration': animationDuration + 'ms' }"></div>
      <div class="header__feature">{{ featureInitialText }}</div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const featureInitialText = ref('')
const featureFinalText = 'New Tonkeeper feature - battery'
const typingDelay = 100

const animationDuration = ref(typingDelay * (featureFinalText.length + 2))

const typeText = () => {
  let index = 0
  const intervalId = setInterval(() => {
    if (index < featureFinalText.length) {
      featureInitialText.value += featureFinalText[index]
      index++
    } else {
      clearInterval(intervalId)
    }
  }, 100)
}

onMounted(() => {
  typeText()
})
</script>

<style scoped lang="scss">
.header {
  --animation-duration: 3.5ms;
  height: 100dvh;

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

  &::after {
    content: '';
    height: 1px;
    width: 100%;
    display: block;
    background: linear-gradient(90deg, transparent, #1d2633 50%, transparent);
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
  }

  &__feature {
    font-size: 80px;
    font-weight: 700;
    line-height: 100px;
    color: #45aef5;

    max-width: 90%;
  }
}

.battery {
  font-size: 72px;

  &::before {
    font-family: 'Font Awesome 5 Free';
    content: '\f244';
    font-weight: 900;
    animation-name: battery;
    animation-duration: var(--animation-duration);
    animation-fill-mode: forwards;
    color: #45aef5;
    display: inline-block;
  }
}

@keyframes battery {
  20% {
    content: '\f244';
    color: #c0392b;
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
