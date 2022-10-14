<template>
  <div class="default-layout">
    <Header/>
    <slot />
  </div>
</template>

<script setup>
import Header from './components/Header'

</script>

<style lang="scss" src="./style.scss" />
