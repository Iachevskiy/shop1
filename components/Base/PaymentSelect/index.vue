<template>
  <div class="base-payment-select">
    <BaseRadio
      v-model="value"
      name="paymentSelect"
      :data="{ value: 'test1', label: 'Картой'}"
      info="Только для физических лиц"
    />
    <BaseRadio
      v-model="value"
      name="paymentSelect"
      :data="{ value: 'test2', label: 'Счет на оплату'}"
      info="Только для юридических лиц. Необходимо заполнить дополнительные данные"
    />
  </div>
</template>

<script setup>

const props = defineProps({
  modelValue: {
    type: String,
    default: 'test1',
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
