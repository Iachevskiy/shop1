<template>
  <div
    ref="category"
    class="entity-category"
    :data-category-id="props.category.id"
  >
    <div
      ref="categoryTitle"
      class="entity-category__title"
      :data-category-id="props.category.id"
    >
      {{ props.category.title }}
    </div>

    <EntityProductList :poducts="props.category.items" />
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

const category = ref(null);
watch(categoryActiveId, (newId) => {
  if (newId === props.category.id) {
    category.value.scrollIntoView({ behavior: 'smooth' });
  }
});

const categoryTitle = ref(null);
watch(observer, (newObserver) => {
  if (newObserver) {
    observer.value.observe(category.value);
  }
});

</script>

<style lang="scss" src="./style.scss" />
