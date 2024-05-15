<template>
  <div class="loader-base" />
</template>

<script lang="ts" setup>

</script>

<style lang="sass">
@keyframes rotate
  100%
    transform: rotate(1turn)

.loader-base
  margin: auto
  width: 100px
  height: 100px
  border-radius: 50%
  background: radial-gradient(farthest-side, var(--background-accent) 94%, #0000) top/10px 10px no-repeat, conic-gradient(#0000 30%, var(--background-accent))
  mask: radial-gradient(farthest-side, #0000 calc(100% - 10px), #000 0)
  animation: rotate 1s infinite linear
</style>
