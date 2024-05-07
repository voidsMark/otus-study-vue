<template>
  <footer class="app-footer">
    <div class="container">The footer</div>
  </footer>
</template>

<script lang="ts" setup>

</script>

<style lang="sass">
.app-footer
  height: 80px
  flex-shrink: 0
  background-color: var(--background-primary)
  border-top: 1px solid var(--background-secondary)
  margin-top: auto
  box-sizing: border-box

  .container
    display: flex
    align-items: center
    height: 100%
    gap: 32px
</style>