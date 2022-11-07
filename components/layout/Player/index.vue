<template>
  <n-config-provider
    :themeOverrides="themeSettings"
    :locale="ruRU"
    :dateLocale="dateRuRU"
  >
    <div class="player-layout">
      <Header class="player-layout__header" />
      <Content class="player-layout__content" />
      <ScrollBtns class="player-layout__scroll-btns" />
    </div>
  </n-config-provider>
</template>

<script setup>
import { NConfigProvider, ruRU, dateRuRU } from 'naive-ui';
import themeSettings from '../themeSettings';

import Header from './components/Header';
import ScrollBtns from './components/ScrollBtns';
import Content from './components/Content';
</script>

<style lang="scss" src="./style.scss" />
