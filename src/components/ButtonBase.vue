<template>
  <div class="button-base">
    <button :class="{'flat': props.flat, 'disabled': props.disabled}">
      <slot />
    </button>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  flat?: boolean,
  disabled?: boolean,
}>()
</script>

<style lang="sass">
.button-base
  cursor: pointer
  button
    padding: 10px
    border-radius: 8px
    border: 1px solid var(--border-accent)
    background-color: var(--background-accent)
    color: var(--text-primary)
    &:hover
      background-color: var(--background-hover)
      border: 1px solid var(--border-hover)
    &:active
      background-color: var(--background-accent)
      color: var(--text-secondary)

    &.flat
      background-color: transparent
      border: 1px solid var(--border-secondary)
      &:hover
        border: 1px solid var(--border-hover)
      &:active
        color: var(--text-secondary)
</style>
