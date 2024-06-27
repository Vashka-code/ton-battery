<template>
  <h2>
    <slot></slot>
  </h2>
</template>

<style lang="scss" scoped>
h2 {
  margin-top: 0;
  font-size: 44px;
  font-weight: 700;
  line-height: 1.4;
  color: var(--title-color);

  @media screen and (max-width: 700px) {
    font-size: 32px;
  }
}
</style>
