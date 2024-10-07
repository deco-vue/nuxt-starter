<script setup lang="ts">
//===============================-< Color Scheme >-===============================
const { $colorMode } = useNuxtApp()
$colorMode.preference = 'light'
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>
