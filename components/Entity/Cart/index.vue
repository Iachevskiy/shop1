<template>
  <div class="entity-cart">
    <h2 class="entity-cart__title">
      Корзина
    </h2>
    <CartList class="entity-cart__list" />

    <!--  Кнопка Доставка  -->
    <DeliveryBtn />
    <!--  Кнопка купить  -->
    <BuyBtn />
  </div>
</template>

<script setup>

import DeliveryBtn from './components/DeliveryBtn';
import BuyBtn from './components/BuyBtn';
import CartList from './components/CartList';

</script>

<style lang="scss" src="./style.scss" />
