<template>
  <n-config-provider
    :themeOverrides="themeSettings"
    :locale="ruRU"
    :dateLocale="dateRuRU"
  >
    <client-only>
      <EntityPlayer />
    </client-only>
  </n-config-provider>
</template>

<script setup>
import { NConfigProvider, ruRU, dateRuRU } from 'naive-ui';
import { usePlayer, useMedia } from '@/composables';
import themeSettings from '../components/layout/themeSettings';

const { mediaSize } = useMedia();

const {} = usePlayer();
</script>

<style scoped>

</style>
