<template>
  <div class="base-radio">
    <n-radio
      :checked="props.data.value === value"
      :value="props.data.value"
      :disabled="props.disabled"
      :name="props.name"
      :label="props.data.label"
      @change="value = props.data.value"
    />
    <BaseInfo
      v-if="props.info"
      :text="props.info"
      size="16"
    />
  </div>
</template>

<script setup>
import { NRadio } from 'naive-ui';

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },

  disabled: {
    type: Boolean,
    default: false,
  },

  data: {
    type: Object,
    required: true,
    validator(val) {
      return !!val.value && !!val.label;
    },
  },

  name: {
    type: String,
    required: true,
  },

  info: {
    type: String,
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

</script>

<style lang="scss" src="./style.scss" />
