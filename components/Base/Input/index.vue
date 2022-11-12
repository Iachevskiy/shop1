<template>
  <BaseFormItemWrapper
    v-bind="cProps"
  >
    <n-input
      v-model:value="value"
      type="text"
      placeholder="Basic Input"
      v-bind="cProps"
    />
  </BaseFormItemWrapper>
</template>

<script setup>
import { NInput } from 'naive-ui';
import { cloneDeep } from 'lodash';
import formItemProps from '@/components/Base/FormItemWrapper/props';

const props = defineProps({
  ...formItemProps,

  type: {
    type: String,
    default: 'text',
    validator(value) {
      return [
        'text',
        'textarea',
        'password',
      ].includes(value);
    },
  },

  showPasswordOn: {
    type: String,
    default: 'click',
    validator(value) {
      return [
        'mousedown',
        'click',
      ].includes(value);
    },
  },

  hint: {
    type: String,
    default: '',
  },

  placeholder: {
    type: String,
    default: '...',
  },

  readonly: {
    type: Boolean,
    default: false,
  },

  maxlength: {
    type: [
      Number,
      String,
    ],
    default: 0,
  },

  minlength: {
    type: [
      Number,
      String,
    ],
    default: 0,
  },

  disabled: {
    type: Boolean,
    default: false,
  },

  clearable: {
    type: Boolean,
    default: false,
  },

  showCount: {
    type: Boolean,
    default: false,
  },

  inputProps: {
    type: Object,
    default: () => ({}),
  },

  status: {
    type: String,
    default: '',
    validator(value) {
      return [
        '',
        'error',
        'success',
      ].includes(value);
    },
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

  round: {
    type: Boolean,
    default: false,
  },

  iconLeft: {
    type: String,
    default: '',
  },

  iconRight: {
    type: String,
    default: '',
  },

  isLoading: {
    type: Boolean,
    default: false,
  },

  modelValue: {
    type: [
      Number,
      String,
    ],
    default: '',
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
const cProps = computed(() => {
  const cProps = cloneDeep(props);
  if (!cProps.maxlength) {
    delete cProps.maxlength;
  }
  return cProps;
});
</script>

<style lang="scss" src="./style.scss" />
