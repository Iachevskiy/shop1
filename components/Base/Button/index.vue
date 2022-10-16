<template>
<div class="base-button">
  <n-button
      class="base-button__btn"
      :class="{'base-button__btn_full-width': fullWidth}"
      :loading="isLoading"
      :strong="isStrong"
      :type="type"
      :size="size"
      :secondary="isSecondary"
      :text="isText"
  >
    <slot/>
    <div class="base-button__content">
      <template v-if="iconLeft">
        <BaseIcon :name="iconLeft"/>
      </template>

      {{title}}

      <template v-if="iconRight">
        <BaseIcon :name="iconRight"/>
      </template>
    </div>

  </n-button>
</div>
</template>

<script setup>
import { NButton } from 'naive-ui'

defineProps({
  title: {
    type: String,
    default: '',
  },

  isLoading: {
    type: Boolean,
    default: false,
  },

  isText: {
    type: Boolean,
    default: false,
  },

  isSecondary: {
    type: Boolean,
    default: false,
  },

  type: {
    type: String,
    default: 'primary',
    validator(value) {
      return [
        'primary',
        'tertiary',
        'info',
        'success',
        'warning',
        'error',
        'default'
      ].includes(value)
    }
  },

  isStrong: {
    type: Boolean,
    default: false,
  },

  size: {
    type: String,
    default: 'medium',
    validator(value) {
      return [
        'tiny',
        'small',
        'medium',
        'large',
      ].includes(value)
    },
  },

  iconLeft: {
    type: String,
    default: ''
  },

  iconRight: {
    type: String,
    default: ''
  },

  fullWidth: {
    type: Boolean,
    default: false,
  },

})

</script>

<style lang="scss" src="./style.scss" />
