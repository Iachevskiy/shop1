<template>
  <div class="entity-checkout-price-detail">
    <BaseTitle
      class="entity-checkout-price-detail__title"
      title="Способ оплаты"
    />

    <BasePaymentSelect v-model="paymentType" />
  </div>
</template>

<script setup>
const paymentType = ref('');
</script>

<style lang="scss" src="./style.scss" />
