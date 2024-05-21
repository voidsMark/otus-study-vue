<template>
  <div class="search-field">
    <div class="filter-button" @click="openFilters">
      <Icon icon="filter" />
    </div>

    <input v-model="inputValue" placeholder="Search..." @keyup.enter="handleChange">

    <div class="search-button" @click="handleChange">
      <Icon icon="search" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import Icon from './Icon.vue'

const props = defineProps<{
  modelValue: string,
  placeholder?: string,
  options?: string[]
  multiple?: boolean
}>()
const emits = defineEmits(['update:modelValue', 'openSearchFilters'])

const inputValue = ref(props.modelValue)

watch(() => props.modelValue, () => {
  inputValue.value = props.modelValue
})

const handleChange = () => {
  emits('update:modelValue', inputValue.value)
}

const openFilters = () => {
  emits('openSearchFilters')
}

</script>

<style lang="sass">
.search-field
  display: inline-flex
  overflow: hidden
  border: 2px solid var(--border-accent)
  border-radius: 8px

  min-width: 160px
  max-width: 100%

  input
    border-radius: 8px 0 0 8px
    padding: 10px 10px
    // FIXME: idk how to fix this padding problem
    width: calc(100% - 20px)
    background-color: var(--background-primary)
    color: var(--text-primary)

    &::placeholder
      color: var(--text-secondary)

  .filter-button
    display: flex
    justify-content: center
    align-items: center
    cursor: pointer

    width: 120px
    background-color: var(--background-secondary)
    svg
      fill: var(--text-primary)

    &:hover
      background-color: var(--background-hover)

    &:active
      background-color: var(--background-secondary)
      svg
        fill: var(--text-secondary)

  .search-button
    display: flex
    justify-content: center
    align-items: center
    cursor: pointer

    width: 120px
    background-color: var(--background-accent)
    svg
      fill: var(--text-primary)

    &:hover
      background-color: var(--background-hover)

    &:active
      background-color: var(--background-accent)
      svg
        fill: var(--text-secondary)
</style>
