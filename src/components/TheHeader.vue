<template>
  <div class="app-header__backing" />
  <header class="app-header">
    <div class="container">The header</div>
  </header>
</template>

<script lang="ts" setup>

</script>

<style lang="sass">
.app-header__backing
  height: 72px

  @media(max-width: 800px)
    height: 48px

.app-header
  background-color: var(--background-primary)
  border-bottom: 1px solid var(--background-secondary)
  flex-shrink: 0
  height: 72px
  position: fixed
  left: 0
  right: 0
  top: 0
  z-index: 1000
  
  @media(max-width: 800px)
    height: 48px

  .container
    display: flex
    align-items: center
    height: 100%
</style>