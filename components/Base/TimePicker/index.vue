<template>
  <BaseSelect
    v-model="value"
    :options="options"
    :clearable="props.clearable"
    :label="props.label"
    :error="props.error"
  />
</template>

<script setup>

const props = defineProps({
  modelValue: {
    type: String,
  },

  label: {
    type: String,
    default: '',
  },

  clearable: {
    type: Boolean,
    default: false,
  },

  error: {
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

const options = computed(() => ([
  {
    label: '10:00 - 12:00',
    value: '10-12',
  },
  {
    label: '12:00 - 14:00',
    value: '12-14',
  },
  {
    label: '14:00 - 16:00',
    value: '14-16',
  },
  {
    label: '16:00 - 18:00',
    value: '16-18',
  },
  {
    label: '18:00 - 20:00',
    value: '18-20',
  },
  {
    label: '20:00 - 22:00',
    value: '20-22',
  },
  {
    label: '22:00 - 24:00',
    value: '22-24',
  },
]
));
</script>

<style lang="scss" src="./style.scss" />
