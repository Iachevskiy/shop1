<template>
  <n-icon size="20">
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
});

</script>
