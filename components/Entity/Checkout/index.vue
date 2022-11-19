<template>
  <div class="entity-checkout">
    <BaseTitle
      class="entity-checkout__title-main"
      title="Оформление заказа"
      size="large"
      btnBack
    />
    <OrderDetails class="entity-checkout__delivery-details" />
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

const router = useRouter();

</script>

<style lang="scss" src="./style.scss" />
