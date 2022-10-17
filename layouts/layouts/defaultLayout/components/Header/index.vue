<template>
  <div class="default-layout-header">

    <BaseLogo class="default-layout-header__logo"/>

    <BaseButton
        title="Укажите адрес доставки"
        theme="primary"
        size="large"
        iconLeft="Navigate"
        class="default-layout-header__change-address"
    />

    <EntityFormSelectLanguage
        class="default-layout-header__change-language"
    />

    <BaseButton
        title="Войти"
        size="large"
        theme="secondary"
        class="default-layout-header__enter"
    />

  </div>
</template>

<script setup>
import { NButton, NIcon } from 'naive-ui'
import { GlobeOutline } from "@vicons/ionicons5";
</script>

<style lang="scss" src="./style.scss" />
