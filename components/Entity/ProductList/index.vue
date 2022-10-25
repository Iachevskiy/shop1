<template>
  <div class="entity-product-list">
    <Product
      v-for="product in props.poducts"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script setup>
import Product from './components/Product';

const props = defineProps({
  poducts: {
    type: Array,
    default: () => [],
  },
});

</script>

<style lang="scss" src="./style.scss" />
