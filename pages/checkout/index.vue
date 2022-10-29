<template>
  <LayoutGrid>
    <template #mainContent>
      <EntityCheckout />
    </template>
    <template #sidebarRight>
      <EntityCart />
    </template>
  </LayoutGrid>
</template>

<script setup>
definePageMeta({
  keepalive: true,
});
</script>
