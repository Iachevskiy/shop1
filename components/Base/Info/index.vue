<template>
  <div class="entity-hint">
    <BaseTooltip :text="text">
      <BaseIcon
        name="info"
        :size="size"
      />
    </BaseTooltip>
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: '',
  },

  size: {
    type: [
      Number,
      String,
    ],
    default: 20,
  },
});
</script>

<style lang="scss" src="./style.scss" />
