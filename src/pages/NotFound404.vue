<template>
  <div class="notFoundPage__container">
    <div class="description">
      Oops! Something went wrong.
    </div>
    <h1>404</h1>
    <div class="description">
      Looks like this page is lost in the digital wilderness.
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="sass">
.notFoundPage__container
  flex: 1 1 auto
  display: flex
  justify-content: center
  flex-direction: column
  align-items: center
  text-align: center

  h1
    font-size: 72px
    margin: 0

  .description
    font-size: 20px
    font-weight: 700
    max-width: 520px
    margin: 0 20px

  @media(max-width: 800px)
    h1
      font-size: 40px

    .description
      font-size: 13px

</style>
