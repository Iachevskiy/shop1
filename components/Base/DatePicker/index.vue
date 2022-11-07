<template>
  <BaseFormItemWrapper
    v-bind="cProps"
  >
    <n-date-picker
      v-model:value="value"
      v-bind="cProps"
      type="date"
    />
  </BaseFormItemWrapper>
</template>

<script setup>
import { NDatePicker } from 'naive-ui';
import formItemProps from '@/components/Base/FormItemWrapper/props';

const props = defineProps({
  ...formItemProps,

  modelValue: {
    type: [
      Date,
      String,
    ],
    default: new Date(),
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
