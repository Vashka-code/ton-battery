<template>
  <base-section>
    <template #title>
      <span class="about-title">About Battery <battery-animation :animationDuration="2000" /></span>
    </template>

    <p>
      This feature is designed to optimize the handling of
      <base-tooltip>
        transaction fees (gas)
        <template #tooltip>
          Gas refers to a unit of computational work required to perform transactions or execute
          smart contracts on a blockchain. It serves as the fee paid for using the network's
          computational resources.
        </template>
      </base-tooltip>
      and provides users with a smoother, more cost-effective experience when performing operations
      on the blockchain. Examples: <br />
      <span class="uppercase">
        Token swaps require ~50 charges, token transfers ~10 charges, and NFT transfers ~4 charges.
      </span>
    </p>
    <h2>Purpose of the Battery Feature</h2>

    <tile-list :list="list"></tile-list>
  </base-section>
  <demarcation-line></demarcation-line>
</template>
<script setup lang="ts">
import BatteryAnimation from '@/entities/components/battery/BatteryAnimation.vue'
import { ref, type Ref } from 'vue'

const list: Ref<TileItem[]> = ref([
  {
    title: 'Optimizing Gas Usage',
    textBlocks: [
      {
        subtitle: 'Fee Management',
        text: 'The feature intelligently manages gas fees, ensuring that users can perform transactions in a cost-effective manner by optimizing the gas consumption for each transaction.'
      },
      {
        subtitle: 'Transaction Efficiency',
        text: 'It ensures that transactions are processed with the least necessary amount of gas, reducing the overall cost of operations on the blockchain.'
      }
    ]
  },
  {
    title: 'Enhanced User Experience',
    textBlocks: [
      {
        subtitle: 'Cost Savings',
        text: 'By optimizing gas fees, the feature helps users save on transaction costs, making it more economical to perform multiple or frequent transactions on the TON blockchain.'
      },
      {
        subtitle: 'Streamlined Transactions',
        text: 'Users experience faster and more efficient transactions due to better management of gas fees, which can contribute to quicker confirmation times and reduced delays.'
      }
    ]
  },
  {
    title: 'Transparency and Control',
    textBlocks: [
      {
        subtitle: 'Detailed Insights',
        text: 'The feature provides users with detailed information about gas consumption and fees, allowing them to understand and control their transaction costs more effectively.'
      },
      {
        subtitle: 'Adaptive Adjustments',
        text: 'It adjusts to current network conditions and suggests optimal gas fees based on real-time data, ensuring users do not overpay or underfund their transactions.'
      }
    ]
  }
])
</script>
<style lang="scss" scoped>
p {
  font-size: 19px;
  margin-top: 15px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
}

h2 {
  color: var(--title-color);
}

.about-title {
  display: flex;
  gap: 20px;
  align-items: center;
}

.uppercase {
  text-transform: uppercase;
}
</style>
