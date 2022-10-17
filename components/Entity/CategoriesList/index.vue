<template>
  <div class="entity-categories-list">

    <!-- btn back-->
    <BaseButton
        title="Все рестораны"
        theme="default"
        size="large"
        iconLeft="ArrowBack"
    />

    <div class="entity-categories-list__title">
      <BaseIcon
          v-if="categoryActive.parentId !== null"
          name="ChevronBack"
          @click="handleSelectCategory(0)"
          class="entity-categories-list__title-back"
      />
      {{ categoryActive.title }}
    </div>

    <div
        v-for="category in categories"
        :key="category.id"
        class="entity-categories-list__item"
        :class="{'entity-categories-list__item_active': categoryActiveId === category.id}"
        @click="handleSelectCategory(category.id)"
    >
      {{ category.title }}
      <BaseIcon
          v-if="category.categories.length"
          name="ChevronForward"
      />
    </div>


  </div>
</template>

<script setup>

const {
  categoryActiveId,
  handleSelectCategory,
  categories,
  categoryActive} = useCatalog()


</script>

<style lang="scss" src="./style.scss"/>
