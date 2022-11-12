<template>
  <div
    ref="videoView"
    class="entity-player-view"
    :data-id="props.data.id"
    :data-index="props.index"
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
      :src="props.data.src"
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
  fullShowId,
  showPlayBtn,
  toHidePlayBtn,
  toShowPlayBtn,
  fullShowIndex,
} = usePlayer();

const props = defineProps({
  index: {
    type: Number,
    required: true,
  },

  height: {
    type: Number,
    required: true,
  },

  data: {
    type: Object,
    required: true,
  },
});

watch(fullShowIndex, (nowFullShowIndex, beforeFullShowIndex) => {
  if (nowFullShowIndex !== beforeFullShowIndex) {
    if (nowFullShowIndex === props.id && !showPlayBtn.value) {
      toPlay();
    } else {
      toPause();
    }
  }
});

const video = ref(null);
const videoView = ref(null);

const { addToObserver, removeFromObserver } = useObserver();
const addItemToObserve = (el) => {
  const itemName = `${props.data.id}-view`;
  addToObserver('observerStartFullShowing', itemName, el);
  addToObserver('observerStartShowing', itemName, el);
};

const toPlay = () => {
  try {
    video.value.play();
  } catch (er) {
  }
};
const toPause = () => {
  video.value.pause();
};

onMounted(() => {
  console.log('onMounted view', props.index, props.data.id);
  addItemToObserve(videoView.value);
});
onBeforeUnmount(() => {
  console.log('onBeforeUnmount view', props.index, props.data.id);
  const itemName = `${props.data.id}-view`;
  removeFromObserver('observerStartFullShowing', itemName, videoView.value);
});

</script>

<style lang="scss" src="./style.scss" />
