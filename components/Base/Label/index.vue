<template>
  <div class="entity-label">
    <div class="entity-label__title">
      {{ label }}
    </div>
    <BaseHint
      v-if="hint"
      :text="hint"
      size="16"
    />
  </div>
</template>

<script setup>

defineProps({
  label: {
    type: String,
    default: '',
  },

  hint: {
    type: String,
    default: '',
  },
});
</script>

<style lang="scss" src="./style.scss" />
