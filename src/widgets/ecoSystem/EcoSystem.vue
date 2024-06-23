<template>
  <base-container>
    <base-title>First of all about Ton Ecosystem</base-title>
    <p>
      The TON (The Open Network) ecosystem is a comprehensive, scalable, and secure blockchain
      platform initially developed by Telegram. It is designed to support a diverse range of
      decentralized applications (dApps), services, and digital assets.
    </p>
    <h2>Key Features:</h2>
    <cards-list :list="list"></cards-list>
  </base-container>
  <demarcation-line></demarcation-line>
</template>
<script lang="ts" setup>
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
<style lang="scss" scoped>
p {
  margin-top: 25px;
  font-size: 19px;
}

h2 {
  color: #fff;
  margin-top: 25px;
}
</style>
