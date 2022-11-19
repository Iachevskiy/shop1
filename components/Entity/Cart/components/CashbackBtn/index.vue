<template>
  <div class="entity-cart-btn-cashback">
    <div class="entity-cart-btn-cashback__icon">
      <BaseIcon name="CardCredit" />
    </div>
    <div class="entity-cart-btn-cashback__title">
      Баллы
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
