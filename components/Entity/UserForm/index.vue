<template>
  <div class="entity-user-form">
    <div class="entity-user-form__title">
      Личные данные
    </div>

    <BaseInput
      v-model="data.name"
      label="Имя и фамилия"
      clearable
      hint="Имя и фамилия"
      class="entity-user-form__name"
    />
    <BaseInput
      v-model="data.email"
      label="Email"
      clearable
      class="entity-user-form__email"
    />

    {{ data.name }}
    {{ data.email }}
  </div>
</template>

<script setup>
const data = reactive({
  name: 'tt',
  email: '',
});
</script>

<style lang="scss" src="./style.scss" />
