<template>
  <div
    class="tooltip"
    @mouseover="showTooltip"
    @mouseleave="hideTooltip"
    @focus="showTooltip"
    @blur="hideTooltip"
    ref="tooltipContainer"
  >
    <button class="tooltip__button">
      <slot></slot>
    </button>
    <div
      class="tooltip__content"
      :style="tooltipStyles"
      :class="{ show: visible }"
      ref="tooltipContent"
    >
      <div class="tooltip__content-inner">
        <slot name="tooltip"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTooltip } from '../composables/useTooltip'

const tooltipContainer = ref<HTMLElement | null>(null)
const tooltipContent = ref<HTMLElement | null>(null)

const { showTooltip, hideTooltip, visible, tooltipStyles } = useTooltip(
  tooltipContainer,
  tooltipContent
)
</script>

<style scoped lang="scss">
.tooltip {
  $self: &;

  position: relative;
  display: inline;

  &__button {
    cursor: pointer;
    display: inline;
    color: inherit;
    background-color: transparent;
    text-decoration: underline;
    font-size: 19px;
    border: none;
    outline: none;
  }

  &__content {
    position: absolute;
    font-size: 14px;
    min-width: 300px;
    text-align: center;
    top: 100%;
    left: 0;
    padding-top: 10px;

    #{$self}__content-inner {
      background-color: var(--main-bg-color);
      color: var(--title-color);
      border-radius: 15px;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
      opacity: 0;
      transition: opacity 0.3s;
      overflow: hidden;
      height: 0;
      padding: 0;
    }

    &.show {
      #{$self}__content-inner {
        opacity: 1;
        height: auto;
        padding: 10px;
      }
    }
  }
}
</style>
