<template>
  <div
    :ref="(el) => addLineToObserve(el, direction)"
    class="entity-player-line-detection"
    :class="{'entity-player-line-detection__main': props.id === 'main'}"
    :data-view-line="direction"
    :data-view-id="id"
  />
</template>

<script setup>
import { useObserver } from '@/composables';

const props = defineProps({
  id: {
    type: String,
    required: true,
  },

  observerName: {
    type: String,
    required: true,
  },

  direction: {
    type: String,
    required: true,
    validator(value) {
      return [
        'top',
        'bottom',
      ].includes(value);
    },
  },
});

const { addToObserver } = useObserver();

const addLineToObserve = (el, name) => {
  name = `${props.id}-view-line-${name}`;
  addToObserver(props.observerName, name, el);
};
</script>

<style lang="scss" src="./style.scss" />
