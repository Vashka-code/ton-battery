<template>
  <base-section>
    <template #title> First of all about Ton Ecosystem </template>

    <p>
      The TON (The Open Network) ecosystem is a comprehensive, scalable, and secure blockchain
      platform initially developed by <strong> Telegram</strong>. It is designed to support a
      diverse range of decentralized applications (dApps), services, and digital assets.
    </p>
    <h2>Key Features:</h2>
    <cards-list :list="list"></cards-list>
  </base-section>
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
    text: 'Used for transactions, staking, and governance within the TON network.',
    icons: ['fas', 'coins']
  },
  {
    title: 'Scalability',
    text: 'Capable of handling millions of transactions per second with dynamic sharding.',
    icons: ['fas', 'up-right-and-down-left-from-center']
  },
  {
    title: 'User Experience',
    size: 'full',
    text: 'Provides near-instant transaction processing and a user-friendly interface for developers and end-users. The TON ecosystem combines advanced blockchain technology with a user-centric approach, making it ideal for scalable applications and services in the decentralized digital economy.',
    icons: ['fas', 'users']
  },
  {
    title: 'Security',
    text: 'Utilizes a Proof-of-Stake consensus mechanism and advanced encryption for robust security.',
    icons: ['fas', 'lock']
  }
])
</script>
<style lang="scss" scoped>
p {
  margin-top: 25px;
  font-size: 19px;

  @media screen and (max-width: 768px) {
    margin-top: 20px;
    font-size: 17px;
  }
}

h2 {
  color: var(--title-color);
  margin-top: 25px;
}
</style>
