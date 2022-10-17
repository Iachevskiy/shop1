<template>
  <div>
    <EntityCategory/>
  </div>
</template>

<script setup>
definePageMeta({
  // keepalive: true
})
const route = useRoute()
const { setPageByFullUrl } = useCatalog()
setPageByFullUrl(route.fullPath)
</script>

