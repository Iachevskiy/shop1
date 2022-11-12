<template>
  <n-icon :size="size">
    <icons :name="name" />
  </n-icon>
</template>

<script setup>
import { NIcon } from 'naive-ui';
import icons from './icons';

defineProps({
  name: {
    type: String,
    required: true,
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
