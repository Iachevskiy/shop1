<template>
  <div class="entity-checkout">
    <BaseTitle
      class="entity-checkout__title-main"
      title="Оформление заказа"
      size="large"
      btnBack
    />
    <OrderDetails class="entity-checkout__delivery-details" />
    <PriceDetails class="entity-checkout__price-details" />
    <BaseTitle
      class="entity-checkout__title-upsell"
      title="Что-то еще?"
      size="large"
    />
    <EntityUpSell class="entity-checkout__upSell" />
  </div>
</template>

<script setup>
import OrderDetails from './components/OrderDetails';
import PriceDetails from './components/PriceDetails';

const router = useRouter();

</script>

<style lang="scss" src="./style.scss" />
