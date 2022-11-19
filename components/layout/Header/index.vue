<template>
  <div class="default-layout-header">
    <BaseLogo class="default-layout-header__logo" />

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

    <BaseModal
      title="Подробности"
    >
      <template #togler>
        <BaseButton
          title="Войти"
          size="large"
          theme="secondary"
          class="default-layout-header__enter"
        />
      </template>
      <template #content>
        test
      </template>
    </BaseModal>
  </div>
</template>

<script setup>
</script>

<style lang="scss" src="./style.scss" />
