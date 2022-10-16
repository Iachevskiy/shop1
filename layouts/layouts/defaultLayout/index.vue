<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <div class="default-layout">

      <Header/>

      <div class="default-layout__main">
        <div class="default-layout__main-container">

          <!--  CategoriesList  -->
          <div class="default-layout__main-sidebar-left">
            <EntityCategoriesList/>
          </div>

          <!--  Main-content  -->
          <div class="default-layout__main-content">
            <slot />
          </div>

          <!--  Cart  -->
          <div class="default-layout__main-sidebar-right">
            <EntityCart/>
          </div>
        </div>

        <!--  footer  -->
        <div class="default-layout__footer">footer</div>
      </div>
    </div>
  </n-config-provider>
</template>

<script setup>
import Header from './components/Header'

import { NConfigProvider } from 'naive-ui'


const themeOverrides = {
  common: {
    primaryColor: 'rgb(252, 224, 0)',
    primaryColorHover: '#f2d700',
    primaryColorSuppl: '#f2d700',
    primaryColorPressed: "#e8ce00",
    buttonColor2: "white",
  },

  Button: {
    textColorPrimary: '#21201f',
    textColorHoverPrimary: '#21201f',
    textColorPressedPrimary: '#21201f',
    textColorFocusPrimary: '#21201f',
    textColorDisabledPrimary: '#21201f',
    borderRadiusLarge: '16px',
    textColorTertiary: '#21201f',
    heightLarge: '48px',
    paddingLarge: '0 20px',
    fontSizeLarge: '16px',
  },
}
</script>

<style lang="scss" src="./style.scss" />
