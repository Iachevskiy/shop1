<template>
  <div class="entity-tooltip">
    <ClientOnly>
      <n-tooltip trigger="hover">
        <template #trigger>
          <slot />
        </template>
        {{ text }}
      </n-tooltip>
    </ClientOnly>
  </div>
</template>

<script setup>
import { NTooltip } from 'naive-ui';

defineProps({
  text: {
    type: String,
    default: '',
  },
});
</script>

<style lang="scss" src="./style.scss" />
