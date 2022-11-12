<template>
  <LayoutGrid>
    <template #sidebarLeft>
      <EntityCategoriesList />
    </template>
    <template #mainContent>
      <EntityMainImage />

      <EntityCategory
        v-for="category in categories"
        :key="category.id"
        :category="category"
      />
    </template>
    <template #sidebarRight>
      <EntityCart />
    </template>
  </LayoutGrid>
</template>

<script setup>
import { useCatalog } from '@/composables';

const { categories } = useCatalog();

definePageMeta({
  keepalive: true,
});

</script>
