<!-- TODO: create a standard component wrapper with base-container, base-title, demacration line and etc. -->
<template>
  <base-container>
    <base-title>Battery Benefits</base-title>
    <cards-swiper :list="list" />
  </base-container>
  <demarcation-line></demarcation-line>
</template>
<script setup lang="ts">
import CardsSwiper from '@/entities/components/CardsSwiper.vue'
import { ref } from 'vue'

const list = ref([
  {
    title: 'Multichain Architecture',
    text: 'Combines a masterchain with multiple workchains, enabling high throughput and scalability.',
    icons: ['fas', 'sitemap']
  },
  {
    title: 'Dynamic Sharding',
    text: 'Facilitates efficient transaction processing and network growth.',
    icons: ['fas', 'handshake']
  },
  {
    title: 'Native Cryptocurrency',
    text: 'Used for transactions, staking, and governance within the TON network. Key Features',
    icons: ['fas', 'coins']
  },
  {
    title: 'Scalability',
    text: 'Capable of handling millions of transactions per second with dynamic sharding.',
    icons: ['fas', 'up-right-and-down-left-from-center']
  },
  {
    title: 'Security',
    text: 'Utilizes a Proof-of-Stake consensus mechanism and advanced encryption for robust security.',
    icons: ['fas', 'lock']
  },
  {
    title: 'User Experience',
    size: 'full',
    text: 'Provides near-instant transaction processing and a user-friendly interface for developers and end-users. The TON ecosystem combines advanced blockchain technology with a user-centric approach, making it ideal for scalable applications and services in the decentralized digital economy.',
    icons: ['fas', 'users']
  }
])
</script>
<style lang="scss" scoped></style>
