<template>
  <n-config-provider :themeOverrides="themeOverrides">
    <div class="default-layout">
      <Header />

      <div
        class="default-layout__main"
        :class="{'default-layout__main_shadow': headerShadow}"
      >
        <div class="default-layout__main-container">
          <!--  CategoriesList  -->
          <div class="default-layout__main-sidebar-left">
            <ClientOnly>
              <EntityCategoriesList />
            </ClientOnly>
          </div>

          <!--  Main-content  -->
          <div class="default-layout__main-content">
            <div ref="headerShadowFlag" />
            <slot />
          </div>

          <!--  Cart  -->
          <div class="default-layout__main-sidebar-right">
            <EntityCart />
          </div>
        </div>

        <!--  footer  -->
        <div class="default-layout__footer">
          footer
        </div>
      </div>
    </div>
  </n-config-provider>
</template>

<script setup>
import { NConfigProvider } from 'naive-ui';
import { cloneDeep } from 'lodash';
import Header from './components/Header';
import { db } from '../../../api/base';

const primaryColor = 'rgb(252, 224, 0)';
const primaryColorHover = '#f2d700';

const SecondaryColor = '#f1f0ed';
const SecondaryColorHover = '#e7e6e4';

const defaultColor = 'white';
const defaultColorHover = '#fafbfc';

const colorBtn = '#21201f';
const themeOverrides = {
  common: {

  },

  Button: {

    borderRadiusLarge: '16px',
    heightLarge: '48px',
    paddingLarge: '0 20px',
    fontSizeLarge: '16px',

    // цвет пульсации
    rippleColor: 'red',

    // Primary type-theme
    // background
    colorPrimary: primaryColor,
    colorHoverPrimary: primaryColorHover,
    colorPressedPrimary: primaryColorHover,
    colorFocusPrimary: primaryColorHover,
    colorDisabledPrimary: primaryColor,
    rippleColorPrimary: primaryColor,
    // color
    textColorPrimary: colorBtn,
    textColorHoverPrimary: colorBtn,
    textColorPressedPrimary: colorBtn,
    textColorFocusPrimary: colorBtn,
    textColorDisabledPrimary: colorBtn,
    // border
    borderPrimary: 'none',
    borderHoverPrimary: 'none',
    borderPressedPrimary: 'none',
    borderFocusPrimary: 'none',
    borderDisabledPrimary: 'none',

    // Secondary(Info) type-theme
    // background
    colorInfo: SecondaryColor,
    colorHoverInfo: SecondaryColorHover,
    colorPressedInfo: SecondaryColorHover,
    colorFocusInfo: SecondaryColorHover,
    colorDisabledInfo: SecondaryColor,
    rippleColorInfo: SecondaryColor,

    // color
    textColorInfo: colorBtn,
    textColorHoverInfo: colorBtn,
    textColorPressedInfo: colorBtn,
    textColorFocusInfo: colorBtn,
    textColorDisabledInfo: colorBtn,
    // border
    borderInfo: 'none',
    borderHoverInfo: 'none',
    borderPressedInfo: 'none',
    borderFocusInfo: 'none',
    borderDisabledInfo: 'none',

    //  default (Warning) type-theme
    // background
    colorWarning: defaultColor,
    colorHoverWarning: defaultColorHover,
    colorPressedWarning: defaultColorHover,
    colorFocusWarning: defaultColorHover,
    colorDisabledWarning: defaultColor,
    rippleColorWarning: defaultColor,

    // color
    textColorWarning: colorBtn,
    textColorHoverWarning: colorBtn,
    textColorPressedWarning: colorBtn,
    textColorFocusWarning: colorBtn,
    textColorDisabledWarning: colorBtn,
    // border
    borderWarning: 'none',
    borderHoverWarning: 'none',
    borderPressedWarning: 'none',
    borderFocusWarning: 'none',
    borderDisabledWarning: 'none',

  },
};

const headerShadowFlag = ref(null);
const headerShadow = useState('headerShadow', () => false);
const initObserverHeaderShadow = () => {
  const options = {
    rootMargin: '0px',
  };

  const handleObserver = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log('isIntersecting');
        headerShadow.value = false;
      } else {
        console.log('notIntersecting');
        headerShadow.value = true;
      }
    });
  };

  const observer = new IntersectionObserver(handleObserver, options);
  observer.observe(headerShadowFlag.value);
};

onMounted(() => {
  initObserverHeaderShadow();
});

</script>

<style lang="scss" src="./style.scss" />
