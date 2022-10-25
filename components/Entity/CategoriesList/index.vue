<template>
  <div class="entity-categories-list">
    <ul>
      <li
        v-for="category in categories"
        :key="category.id"
        class="entity-categories-list__item"
        :class="{'entity-categories-list__item_active': categoryActiveId === category.id}"
        @click="handleSelectCategory(category.id)"
      >
        {{ category.title }}
      </li>
    </ul>
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

<style lang="scss" src="./style.scss" />
