<template>
  <div class="entity-category">
    <MainImage/>

    <div class="entity-category__title">{{ categoryActive.title }}</div>

    <EntityProductList/>

  </div>
</template>

<script setup>
  import MainImage from './components/MainImage'
  const { categoryActive } = useCatalog()

</script>

<style lang="scss" src="./style.scss" />
