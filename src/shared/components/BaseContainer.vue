<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  width: 90%;
  padding: 80px 0;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    padding: 50px 0;
  }
}
</style>
