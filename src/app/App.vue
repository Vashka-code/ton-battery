<template>
  <homepage />
</template>

<script setup lang="ts">
import { Homepage } from '@/pages'
</script>

<style lang="scss">
:root {
  --main-bg-color: #0a121d;
  --secondary-bg-color: #070f1b;
  --third-bg-color: #070f1b;
  --main-color: #8994a3;
  --main-body-bg-color: #10161f;
  --battery-color: #45aef5;
  --low-battery-color: #c0392b;
  --title-color: #fff;
}

body {
  color: var(--main-color);
  background: var(--main-body-bg-color);
  font-size: 16px;
  line-height: 1.5;
  font-family:
    Inter,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    sans-serif;
}

* {
  box-sizing: border-box;
}
</style>
