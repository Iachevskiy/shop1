<template>
  <n-config-provider :themeOverrides="themeSettings">
    <div class="default-layout">
      <!--   header   -->
      <div class="default-layout__header">
        <slot name="header">
          <LayoutHeader />
        </slot>
      </div>

      <!--   main   -->
      <div class="default-layout__main">
        <div class="default-layout__main-container">
          <!--  sidebar-left  -->
          <div
            v-if="slots.sidebarLeft"
            class="default-layout__main-sidebar-left"
          >
            <ClientOnly>
              <slot name="sidebarLeft" />
            </ClientOnly>
          </div>

          <!--  Main-content  -->
          <div class="default-layout__main-content">
            <slot name="mainContent" />
          </div>

          <!--  sidebar-right  -->
          <div
            v-if="slots.sidebarRight"
            class="default-layout__main-sidebar-right"
          >
            <ClientOnly>
              <slot name="sidebarRight" />
            </ClientOnly>
          </div>
        </div>

        <!--  footer  -->
        <div
          v-if="slots.footer"
          class="default-layout__footer"
        >
          <slot name="footer" />
        </div>
      </div>
    </div>
  </n-config-provider>
</template>

<script setup>
import { NConfigProvider } from 'naive-ui';
import themeSettings from '../themeSettings';

const slots = useSlots();

</script>

<style lang="scss" src="./style.scss" />
