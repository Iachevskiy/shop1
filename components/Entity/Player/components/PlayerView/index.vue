<template>
  <div
    :ref="(el) =>addItemToObserve(el)"
    class="entity-player-view"
    :style="{ order: props.index }"
    :data-item="props.id"
  >
    <BaseButton
      v-show="showPlayBtn"
      class="entity-player-view__play-btn"
      iconLeft="Play"
      theme="secondary"
      @onClick="toPlay"
    />
    <video
      ref="video"
      class="entity-player-view__img"
      :src="videos[props.index].src"
      currentindex="0"
      loop
      playsinline
      @play="toHidePlayBtn"
      @pause="fullShowId === props.id ? toShowPlayBtn() : ''"
      @click="showPlayBtn ? toPlay() : toPause()"
    />
  </div>
</template>

<script setup>
import { useObserver, usePlayer } from '@/composables';

const {
  videos, fullShowId, showPlayBtn, toHidePlayBtn, toShowPlayBtn, startShowId,
} = usePlayer();

const props = defineProps({
  id: {
    type: String,
    required: true,
  },

  index: {
    type: Number,
    required: true,
  },

  height: {
    type: Number,
    required: true,
  },
});

watch(fullShowId, (nowFullShowId, beforeFullShowId) => {
  if (nowFullShowId !== beforeFullShowId) {
    if (nowFullShowId === props.id && !showPlayBtn.value) {
      toPlay();
    } else {
      toPause();
    }
  }
});

const video = ref(null);
const wrapp = ref(null);

const { addToObserver } = useObserver();
const addItemToObserve = (el) => {
  const itemName = `${props.id}-view`;
  addToObserver('observerStartFullShowing', itemName, el);
  addToObserver('observerStartShowing', itemName, el);
  wrapp.value = el;
};

const toPlay = () => {
  console.log('toPlay', props);
  try {
    video.value.play();
  } catch (er) {
    console.log('can not play', er);
  }
};
const toPause = () => {
  console.log('toPause');
  video.value.pause();
};

</script>

<style lang="scss" src="./style.scss" />
