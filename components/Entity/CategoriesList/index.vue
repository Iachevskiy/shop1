<template>
  <div class="entity-categories-list">
    <!-- btn back-->
    <BaseButton
        v-if="categoryActiveParent"
        :title="categoryActiveParent.title"
        theme="default"
        size="large"
        iconLeft="ArrowBack"
        @click="handleSelectCategory(categoryActiveParent.id)"
    />


    <div v-else class="entity-categories-list__title">Меню</div>


    <ul>
      <li
          v-for="category in categories"
          :key="category.id"
          @click="handleSelectCategory(category.id)"
          class="entity-categories-list__item"
          :class="{'entity-categories-list__item_active': categoryActiveId === category.id}"
      >
        {{ category.title }}
        <BaseIcon
            v-if="category.categories.length"
            name="ChevronForward"
        />
      </li>
    </ul>

<!--      <div-->
<!--            v-for="category in categories"-->
<!--            :key="category.id"-->
<!--            class="entity-categories-list__item"-->
<!--            :class="{'entity-categories-list__item_active': categoryActiveId === category.id}"-->
<!--            @click="handleSelectCategory(category.id)"-->
<!--        >-->
<!--          {{ category.title }}-->
<!--          <BaseIcon-->
<!--              v-if="category.categories.length"-->
<!--              name="ChevronForward"-->
<!--          />-->
<!--        </div>-->




  </div>
</template>

<script setup>

const {
  categoryActiveId,
  handleSelectCategory,
  categories,
  categoryActive,
  categoryActiveParent,
  catalog
} = useCatalog()

console.log(catalog)

</script>

<style lang="scss" src="./style.scss"/>
