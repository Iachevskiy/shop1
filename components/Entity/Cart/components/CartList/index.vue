<template>
  <div class="entity-cart-list">
    <div
      v-if="!cartItems.length"
      class="entity-cart-list__empty"
    >
      В вашей корзине пока пусто
    </div>

    <div v-else>
      <EntityProduct
        v-for="cartItem in cartItems"
        :key="cartItem.id"
        :productId="cartItem.id"
        theme="row"
      />
    </div>
  </div>
</template>

<script setup>
import { useCart } from '@/composables';

const { cartItems } = useCart();
</script>

<style lang="scss" src="./style.scss" />
