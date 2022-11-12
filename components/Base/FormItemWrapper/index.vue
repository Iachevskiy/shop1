<template>
  <div
    class="base-form-item-wrapper"
    :class="{'base-form-item-wrapper__has-error': !!error}"
  >
    <div class="base-form-item-wrapper__label">
      {{ label }}
    </div>
    <BaseInfo
      v-if="info"
      :text="info"
      size="16"
      class="base-form-item-wrapper__info"
    />
    <div class="base-form-item-wrapper__item">
      <ClientOnly>
        <slot />
      </ClientOnly>
    </div>

    <div class="base-form-item-wrapper__error">
      {{ error }}
    </div>
  </div>
</template>

<script setup>

import defaultProps from './props';

const props = defineProps({
  ...defaultProps,
});

</script>

<style lang="scss" src="./style.scss" />
