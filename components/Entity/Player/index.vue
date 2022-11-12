<template>
  <!--  <div class="entity-player__wrapper">-->
  <div
    :ref="(el)=> setRoot(el)"
    class="entity-player"
    :data-size="playerHeight"
    @scroll="scroll"
  >
    <div
      ref="view1"
      style="max-height: 100%"
    >
      <PlayerView
        id="1"
        :index="view1Order"
        :height="playerHeight"
      />
    </div>

    <div
      ref="view2"
      style="max-height: 100%"
    >
      <PlayerView
        id="2"
        :index="view2Order"
        :height="playerHeight"
      />
    </div>
    <div
      ref="view3"
      style="max-height: 100%"
    >
      <PlayerView
        id="3"
        :index="view3Order"
        :height="playerHeight"
      />
    </div>
  </div>
<!--  </div>-->
</template>

<script setup>
import { useObserver, usePlayer, useMedia } from '@/composables';

import PlayerView from './components/PlayerView';

const { mediaSize } = useMedia();

const {
  view1Order,
  view2Order,
  view3Order,
  startShowId,
  fullShowId,
  videos,
} = usePlayer();

const { observerSetRoot, addResizeObserver, addToResizeObserver } = useObserver();

const view1 = ref(null);
const view2 = ref(null);
const view3 = ref(null);
watch(
  startShowId,
  (nowStartShowId, beforeStartShowId) => {
    if (nowStartShowId !== beforeStartShowId) {
      // console.log('scrollIntoView', nowStartShowId, nowStartShowId === '2');
    }
  },
  { deep: true },
);

const playerHeight = ref(1);

const rootEl = ref(null);

const scroll = () => {
  console.log('scroll 1');
};

const setRoot = (el) => {
  observerSetRoot('observerStartFullShowing', el);
  observerSetRoot('observerStartShowing', el);

  rootEl.value = el;
  // el.addEventListener('scroll', scroll, false);
  el.addEventListener('wheel', wheelListener, { passive: false });
  async function wheelListener(e) {
    e.preventDefault();

    //  с первого на второй
    if (el.scrollTop < 700 && e.deltaY > 0) {
      el.scrollTop += e.deltaY;
      const delta = 700 - el.scrollTop;
      if (delta < 100) {
        el.scrollTop += delta;
      }
    }

    //  со второго на первый
    if (el.scrollTop <= 700 && e.deltaY < 0) {
      el.scrollTop += e.deltaY;
      const delta = 0 - el.scrollTop;
      if (delta > 0) {
        el.scrollTop -= delta;
      }
    }

    //  со второго на третий
    if (el.scrollTop > 700 && el.scrollTop < 1400 && e.deltaY > 0) {
      el.scrollTop += e.deltaY;
      const delta = 1400 - el.scrollTop;
      if (delta < 100) {
        el.scrollTop += delta;
      }
    }

    // с третего на второй
    if (el.scrollTop > 700 && el.scrollTop < 1400 && e.deltaY < 0) {
      el.scrollTop += e.deltaY;
      const delta = 700 - el.scrollTop;
      if (delta < 100) {
        el.scrollTop -= delta;
      }
    }
  }
};

// проблема 1
// остановить пролистывание при fullOpenView
// решение - при изменение fullOpenView блокируем el.scrollTop += e.deltaY на время
// проблема 2
// если не докрутили, scrollIntoView до самого большого полуоткрытого view
// debounce 200ms if(startShowId !== fullShowId) ,больший view scrollIntoView

</script>

<style lang="scss" src="./style.scss" />
