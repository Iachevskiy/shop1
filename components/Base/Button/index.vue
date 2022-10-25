<template>
  <div class="base-button">
    <n-button
      class="base-button__btn"
      :class="{'base-button__btn_full-width': fullWidth}"
      :loading="isLoading"
      :strong="!textLite"
      :disabled="disabled"
      :type="type"
      :size="size"
      @click="handleClick"
    >
      <slot />
      <div class="base-button__content">
        <template v-if="iconLeft">
          <BaseIcon :name="iconLeft" />
        </template>

        {{ title }}
        <template v-if="iconRight">
          <BaseIcon :name="iconRight" />
        </template>
      </div>
    </n-button>
  </div>
</template>

<script>
import { NButton } from 'naive-ui';

export default {
  name: 'CustomName',
};
</script>

<script setup>
const emit = defineEmits([
  'inFocus',
  'submit',
]);

const props = defineProps({
  title: {
    type: String,
    default: '',
  },

  isLoading: {
    type: Boolean,
    default: false,
  },

  theme: {
    type: String,
    default: 'default',
    validator(value) {
      return [
        'primary',
        'secondary',
        'default',
      ].includes(value);
    },
  },

  textLite: {
    type: Boolean,
    default: false,
  },

  size: {
    type: String,
    default: 'large',
    validator(value) {
      return [
        'tiny',
        'small',
        'medium',
        'large',
      ].includes(value);
    },
  },

  iconLeft: {
    type: String,
    default: '',
  },

  iconRight: {
    type: String,
    default: '',
  },

  fullWidth: {
    type: Boolean,
    default: false,
  },

  disabled: {
    type: Boolean,
    default: false,
  },

});

const type = computed(() => {
  if (props.theme === 'primary') {
    return 'primary';
  }
  if (props.theme === 'secondary') {
    return 'info';
  }
  if (props.theme === 'default') {
    return 'warning';
  }
  return null;
});

const handleClick = (e) => {
  if (props.disabled) return;
  this.$emit('onClick', e);
};
</script>

<style lang="scss" src="./style.scss" />
