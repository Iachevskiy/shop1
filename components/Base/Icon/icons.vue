<template>
  <GlobeOutline v-if="name === 'GlobeOutline'"/>
  <BagOutline  v-if="name === 'BagOutline'"/>
  <Navigate  v-if="name === 'Navigate'"/>
  <Rocket  v-if="name === 'Rocket'"/>
  <InformationCircleOutline  v-if="name === 'InformationCircleOutline'"/>
  <ArrowBack  v-if="name === 'ArrowBack'"/>
</template>

<script setup>
import {
  GlobeOutline,
  BagOutline,
  Navigate,
  Rocket,
  InformationCircleOutline,
  ArrowBack,
} from "@vicons/ionicons5";

defineProps({
  name: {
    type: String,
    required: true,
}})

</script>
