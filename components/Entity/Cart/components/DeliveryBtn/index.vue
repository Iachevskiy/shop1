<template>
  <div class="entity-cart-btn-delivery">
    <div class="entity-cart-btn-delivery__icon">
      <BaseIcon name="Rocket" />
    </div>
    <div class="entity-cart-btn-delivery__title">
      Доставка
    </div>

    <BaseModal
      title="Подробности"
    >
      <template #togler>
        <BaseIcon name="info" />
      </template>
      <template #content>
        test
      </template>
    </BaseModal>
  </div>
</template>

<script>

</script>

<style lang="scss" src="./style.scss" />
