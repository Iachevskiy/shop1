<template>
  <BaseButton
    v-if="cartTotal"
    size="large"
    fullWidth
    theme="primary"
    class="entity-cart-buy-btn__wrapper"
    @click="toggleShowCheckout"
  >
    <div class="entity-cart-buy-btn">
      <NuxtLink
        to="/checkout"
        class="entity-cart-buy-btn__title"
      >
        Верно, далее
      </NuxtLink>
      <div class="entity-cart-buy-btn__total">
        {{ cartTotal }} p
      </div>
    </div>
  </BaseButton>
</template>

<script setup>
import { useCheckout, useCart } from '@/composables';

const { cartTotal } = useCart();
const { toggleShowCheckout } = useCheckout();

</script>

<style lang="scss" src="./style.scss" />
