<template>
  <div
    ref="categoryRef"
    class="entity-category"
    :data-category-id="props.category.id"
  >
    <div class="entity-category__title">
      {{ props.category.title }}
    </div>

    <div class="entity-category__product-list">
      <EntityProduct
        v-for="productId in props.category.items"
        :key="productId"
        :productId="productId"
      />
    </div>
  </div>
</template>

<script setup>
import { useCatalog } from '@/composables';

const { categoryActiveId, observer } = useCatalog();

const props = defineProps({
  category: {
    type: Object,
    default: () => ({}),
  },
});

// scroll when select category
const categoryRef = ref(null);
watch(categoryActiveId, (newId) => {
  if (newId === props.category.id) {
    categoryRef.value.scrollIntoView({ behavior: 'smooth' });
  }
});

// add observer item
watch(observer, (newObserver) => {
  if (newObserver) {
    observer.value.observe(categoryRef.value);
  }
});

</script>

<style lang="scss" src="./style.scss" />
