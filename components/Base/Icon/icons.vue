<template>
  <GlobeOutline v-if="name === 'GlobeOutline'" />
  <BagOutline v-if="name === 'BagOutline'" />
  <Navigate v-if="name === 'Navigate'" />
  <Rocket v-if="name === 'Rocket'" />
  <InformationCircleOutline v-if="name === 'info'" />
  <ArrowBack v-if="name === 'ArrowBack'" />
  <ArrowForward v-if="name === 'ArrowForward'" />
  <ChevronBack v-if="name === 'ChevronBack'" />
  <ChevronForward v-if="name === 'ChevronForward'" />
  <Add v-if="name === 'Add'" />
  <Remove v-if="name === 'Minus'" />
  <Play v-if="name === 'Play'" />
  <CardOutline v-if="name === 'CardCredit'" />
  <Close v-if="name === 'Close'" />
</template>

<script setup>
import {
  GlobeOutline,
  BagOutline,
  Navigate,
  Rocket,
  InformationCircleOutline,
  ArrowBack,
  ArrowForward,
  ChevronBack,
  ChevronForward,
  Add,
  Remove,
  Play,
  CardOutline,
  Close,
} from '@vicons/ionicons5';

defineProps({
  name: {
    type: String,
    required: true,
  },
});

</script>
