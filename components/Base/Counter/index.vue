<template>
  <div
    class="base-counter"
    :class="`base-counter__theme-${props.theme}`"
  >
    <BaseIcon
      class="base-counter__icon base-counter__icon-minus"
      name="Minus"
      @click="handleClick(-1)"
    />
    <div class="base-counter__count">
      {{ props.modelValue }}
    </div>
    <BaseIcon
      class="base-counter__icon base-counter__icon-plus"
      name="Add"
      @click="handleClick(1)"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Number,
    default: 0,
  },
  theme: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['update:modelValue']);

const handleClick = (value) => {
  const result = props.modelValue + value;
  if (result > -1) {
    emit('update:modelValue', result);
  }
};
</script>

<style lang="scss" src="./style.scss" />
