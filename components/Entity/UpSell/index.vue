<template>
  <div class="entity-upsell">
    <EntityProduct
      v-for="product in products"
      :key="product.id"
      :productId="product.id"
    />
  </div>
</template>

<script setup>
import { useCatalog } from '@/composables';

const { products } = useCatalog();
</script>

<style lang="scss" src="./style.scss" />
