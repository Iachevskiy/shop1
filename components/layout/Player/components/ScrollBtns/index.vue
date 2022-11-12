<template>
  <div class="player-layout-scroll-btn__wrapper">
    <div
      class="player-layout-scroll-btn"
      @click="toMainPlayer"
    >
      left
    </div>
    <div class="player-layout-scroll-btn">
      right
    </div>
  </div>
</template>

<script setup>
import { useObserver } from '@/composables';

const { observers } = useObserver();

const mainPlayerRef = ref(null);
const toMainPlayer = () => {
  console.log('toMainPlayer');
  mainPlayerRef.value.scrollIntoView({ behavior: 'smooth' });
};
watch(
  observers,
  (newObservers) => {
    if (!mainPlayerRef.value) {
      newObservers.forEach((data) => {
        if (data.name === 'observerStartFullShowing') {
          mainPlayerRef.value = data.options.root;
          // console.log('');
          // console.log(data);
        }
      });
    }
  },
  { deep: true },
);
</script>

<style lang="scss" src="./style.scss" />
