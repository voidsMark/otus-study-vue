<template>
  <div class="app-container">
    <TheHeader />
    <router-view />
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import TheFooter from './components/TheFooter.vue'
import TheHeader from './components/TheHeader.vue'
</script>

<style lang="sass">
.app-container
  min-height: 100vh
  // fix for mobile
  min-height: calc(var(--vh, 1vh) * 100)
  display: flex
  flex-direction: column
</style>
