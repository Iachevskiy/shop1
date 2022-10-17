<template>
  <div>
    <EntityCategory/>
  </div>
</template>

<script setup>

const route = useRoute()
const { setPageByFullUrl } = useCatalog()
setPageByFullUrl(route.fullPath)
</script>

