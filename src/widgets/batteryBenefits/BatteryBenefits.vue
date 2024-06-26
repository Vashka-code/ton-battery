<template>
  <base-section>
    <template #title> Battery Benefits </template>

    <cards-swiper :list="list" />
  </base-section>
</template>
<script setup lang="ts">
import CardsSwiper from '@/entities/components/CardsSwiper.vue'
import { ref } from 'vue'

const list = ref([
  {
    title: 'Dynamic Gas Management',
    text: `The feature dynamically adjusts gas settings to reflect current network conditions, helping users avoid unnecessary costs and making the most out of their Toncoin.`,
    icons: ['fas', 'car']
  },
  {
    title: 'Economic Transactions',
    text: 'By optimizing gas usage, users can execute transactions more economically, allowing them to perform more operations without incurring high fees.',
    icons: ['fas', 'coins']
  },
  {
    title: 'Faster Confirmations',
    text: 'Efficient gas management leads to quicker transaction confirmations as the feature calculates the optimal gas required to get transactions processed promptly.',
    icons: ['fas', 'fa-person-running']
  },
  {
    title: 'Reduced Failed Transactions',
    text: 'With better control over gas settings, the likelihood of failed or stuck transactions due to insufficient gas is minimized, enhancing reliability.',
    icons: ['fas', 'fa-chart-gantt']
  },
  {
    title: 'Clear Breakdown',
    text: 'Users can see a clear breakdown of how gas fees are being calculated and used, providing better transparency into the costs associated with each transaction.',
    icons: ['fas', 'clover']
  },
  {
    title: 'Customizable Options',
    text: 'The feature allows users to customize their gas settings according to their priorities, whether it’s speed or cost, giving them greater control over their transactions.',
    icons: ['fas', 'gear']
  }
])
</script>
<style lang="scss" scoped></style>
