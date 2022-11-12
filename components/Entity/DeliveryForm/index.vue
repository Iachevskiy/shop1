<template>
  <div class="entity-delivery-form">
    <BaseTitle
      class="entity-delivery-form__title"
      title="Доставка"
    />
    <BaseInput
      v-model="data.address"
      label="Адрес доставки"
      clearable
      class="entity-delivery-form__address"
    />
    <BaseInput
      v-model="data.entrance"
      label="Подъезд"
      clearable
      class="entity-delivery-form__entrance"
    />
    <BaseInput
      v-model="data.intercom"
      label="Домофон"
      clearable
      class="entity-delivery-form__intercom"
    />
    <BaseInput
      v-model="data.floor"
      label="Этаж"
      clearable
      class="entity-delivery-form__floor"
    />
    <BaseInput
      v-model="data.apartment"
      label="Квартира"
      clearable
      class="entity-delivery-form__apartment"
    />
    <BaseInput
      v-model="data.comment"
      label="Комментарий"
      clearable
      type="textarea"
      placeholder="Комментарий к заказу"
      class="entity-delivery-form__comment"
    />

    <BaseDatePicker
      v-model="data.date"
      label="Дата"
      clearable
      class="entity-delivery-form__date"
    />

    <BaseTimePicker
      v-model="data.time"
      clearable
      label="Время"
      class="entity-delivery-form__time"
    />
  </div>
</template>

<script setup>
const data = reactive({
  address: 'Оренбург, Салмышская улица, 17',
  entrance: '',
  intercom: '',
  apartment: '',
  date: null,
  options: [
    {
      label: 'test1',
      value: 't1',
    },
    {
      label: 'test2',
      value: 't2',
    },
    {
      label: 'test3',
      value: 't3',
    },
    {
      label: 'test4',
      value: 't4',
    },
    {
      label: 'test5',
      value: 't5',
    },
    {
      label: 'test6',
      value: 't6',
    },
  ],
});
</script>

<style lang="scss" src="./style.scss" />
