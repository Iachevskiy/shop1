<template>
  <BaseFormItemWrapper
    v-bind="cProps"
  >
    <n-select
      v-model:value="value"
      v-bind="cProps"
      :options="props.options"
    />
  </BaseFormItemWrapper>
</template>

<script setup>
import { NSelect } from 'naive-ui';
import formItemProps from '@/components/Base/FormItemWrapper/props';

const props = defineProps({
  ...formItemProps,

  modelValue: {
    type: [
      String,
      Array,
    ],
  },

  options: {
    type: Array,
    default: () => ([]),
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

  multiple: {
    type: Boolean,
    default: false,
  },

  filterable: {
    type: Boolean,
    default: false,
  },

  clearable: {
    type: Boolean,
    default: false,
  },

  maxTagCount: {
    type: [
      String,
      Number,
    ],
    default: '',
  },
});

const cProps = computed(() => props);

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
