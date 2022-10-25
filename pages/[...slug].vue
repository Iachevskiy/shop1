<template>
  <div>
    <EntityMainImage />

    <EntityCategory
      v-for="category in categories"
      :key="category.id"
      :category="category"
    />
  </div>
</template>

<script setup>

import { useCatalog } from '@/composables';

const {
  categoryActiveId,
  handleSelectCategory,
  categories,
} = useCatalog();

</script>
