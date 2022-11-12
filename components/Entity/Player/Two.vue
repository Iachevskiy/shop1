<template>
  <div
    ref="root"
    class="entity-player2"
  >
    <PlayerView
      v-for="(video, index) in videos2"
      :key="video.id"
      :data="video"
      :index="index"
      :height="700"
    />
  </div>
</template>

<script setup>
import { useObserver, usePlayer } from '@/composables';

import PlayerView from './components/PlayerView';

const { observerSetRoot } = useObserver();

const {
  fullShowId,
  fullShowIndex,
  videos,
  addObserverStartFullShow,
} = usePlayer();

const startViewIndex = ref(0);
const endViewIndex = ref(8);
const root = ref(null);

// Хотим 9 view
const countView = ref(9);
// Добавляем 0-й индекс
countView.value -= 1;
// Если получилось четное число, добавляе 1
if (!Number.isInteger(countView.value / 2)) countView.value += 1;
const center = Math.floor(countView.value / 2);
const lineUpdate = ref({
  top: center - 1,
  bottom: center + 1,
  center,
});

endViewIndex.value = countView.value;

const videos2 = computed(() => {
  const newAr = videos.value.slice(startViewIndex.value, endViewIndex.value + 1);
  return newAr;
});

watch(fullShowId, () => {
  const { top, bottom, center } = lineUpdate.value;
  if (fullShowIndex.value === top || fullShowIndex.value === bottom) {
    const indexVideos = videos.value.findIndex((video) => video.id === fullShowId.value);
    const noNewOnTop = indexVideos - center < 0;
    const noNewOnBottom = (videos.value.length - (indexVideos + center)) < 1;

    if (noNewOnTop || noNewOnBottom) return;
    startViewIndex.value = indexVideos - center;
    endViewIndex.value = indexVideos + center;
  }
});

const setRoot = (el) => {
  observerSetRoot('observerStartFullShowing', el);
  observerSetRoot('observerStartShowing', el);
  root.value = el;
};

onMounted(() => {
  setRoot(root.value);
});

onBeforeMount(() => {
  addObserverStartFullShow();
});

</script>

<style lang="scss" src="./style2.scss" />
