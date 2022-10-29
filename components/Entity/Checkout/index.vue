<template>
  <div class="entity-checkout">
    <div class="entity-checkout__title entity-checkout__title_main">
      <BaseButton
        title="Назад"
        theme="secondary"
        iconLeft="ArrowBack"
        @click="router.back()"
      />
      Оформление заказа
    </div>
    <DeliveryDetails class="entity-checkout__delivery-details" />
    <PriceDetails class="entity-checkout__price-details" />
    <div class="entity-checkout__title entity-checkout__title_upsell">
      Что-то еще?
    </div>
    <EntityUpSell class="entity-checkout__upSell" />
  </div>
</template>

<script setup>
import DeliveryDetails from './components/DeliveryDetails';
import PriceDetails from './components/PriceDetails';

const router = useRouter();

</script>

<style lang="scss" src="./style.scss" />
