<template>
  <base-container>
    <base-title>How to Use:</base-title>

    <div class="accordions">
      <accordion-panel :showElement="true">
        <template #title> Charging battery </template>
        <div class="two-colums">
          <div class="two-colums__text-column">
            1. First of all we should download tonkeeper form Play Market/App store <br />
            2. In Home Page we should click on the settings icon <br />
            3. In settings we should see battery in menu and we can click it <br />
            4. In battery page recharge battery with NOT, USDT and of course TON and we can share
            battery with our friends. <br />
          </div>
          <div class="two-colums__image-column">
            <img src="./assets/home-page.jpg" alt="Home page screen" />
            <img src="./assets/settings-page.jpg" alt="Settings page screen" />
            <img src="./assets/battery-page.jpg" alt="Battery page screen" />
            <img src="./assets/charge-with-usdt-page.jpg" alt="Charge with usdt screen" />
          </div>
        </div>
      </accordion-panel>
      <accordion-panel>
        <template #title> Battery Refund </template>
        <div class="two-colums">
          <div class="two-colums__text-column">
            1. For refund you should open battery page and in battery page u4ypu should click to the
            charge history. <br />
            2. In charge history page you will see your transaction and details button under
            transation. (Sorry for russian language, feature still in beta =)) <br />
            3. And after click to the button your tokens will be return in one or few minutes.
          </div>
          <div class="two-colums__image-column">
            <img src="./assets/battery-page.jpg" alt="Battery page screen" />
            <img src="./assets/charge-history-page.jpg" alt="Battery page screen" />
          </div>
        </div>
      </accordion-panel>
      <accordion-panel>
        <template #title> Payment </template>
        And after charging you can use charge instead flee. App will ba automaticaly use less costs
        option for you.
      </accordion-panel>
    </div>
  </base-container>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.accordions {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

img {
  max-width: 200px;
  display: block;
  margin-top: 5px;
  margin-bottom: 5px;
}

.two-colums {
  &__image-column {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    gap: 10px;
  }
}
</style>
