<template>
  <div class="base-checkbox">
    <n-checkbox v-model:checked="value">
      <slot />
    </n-checkbox>
  </div>
</template>

<script setup>

import { NCheckbox } from 'naive-ui';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue']);
const value = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emit('update:modelValue', val);
  },
});

</script>

<style lang="scss" src="./style.scss" />
