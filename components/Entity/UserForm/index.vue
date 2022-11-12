<template>
  <div class="entity-user-form">
    <BaseTitle
      class="entity-user-form__title"
      title="Личные данные"
    />

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

    <BaseCheckbox
      v-model="data.notify"
      class="entity-user-form__notify"
    >
      Соглашаюсь получать рекламные сообщения на эл. почту, аб. номер
    </BaseCheckbox>
  </div>
</template>

<script setup>
const data = reactive({
  name: '',
  email: '',
  notify: false,
});
</script>

<style lang="scss" src="./style.scss" />
