<template>
  <div
    class="base-title"
    :class="`base-title__size_${props.size}`"
  >
    <BaseButton
      v-if="props.btnBack"
      title="Назад"
      theme="secondary"
      iconLeft="ArrowBack"
      @click="router.back()"
    />
    {{ props.title }}
  </div>
</template>

<script setup>

const props = defineProps({
  title: {
    type: String,
  },

  size: {
    type: String,
    default: 'medium',
    validator(value) {
      return [
        'small',
        'medium',
        'large',
      ].includes(value);
    },
  },

  btnBack: {
    type: Boolean,
    default: false,
  },
});

const router = useRouter();
</script>

<style lang="scss" src="./style.scss" />
