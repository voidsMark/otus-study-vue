<template>
  <div class="input-base">
    <div v-if="props.type === 'search'" class="input-base__search">
      <div class="filter-button" @click="openFilters">
        <Icon icon="filter" />
      </div>
      <input v-model="inputValue" placeholder="Search..." @keyup.enter="handleChange">

      <div class="search-button" @click="handleChange">
        <Icon icon="search" />
      </div>
    </div>

    <div
      v-if="props.type === 'number' || props.type === 'text'"
      class="input-base__input-field"
      :class="{'number': props.type === 'number', 'text': props.type === 'text'}"
    >
      <template v-if="props.type === 'number'">
        <input v-model.number="inputValue" :placeholder="placeholder" @change="handleChange">
      </template>

      <template v-if="props.type === 'text'">
        <input v-model="inputValue" :placeholder="placeholder" @change="handleChange">
      </template>
    </div>
    <!-- TODO: Create custom select component -->
    <div v-if="props.type === 'select'" class="input-base__select">
      <select
        id="select"
        v-model="inputValue"
        name="select"
        :multiple="props.multiple"
        @change="handleChange"
      >
        <!-- TODO: fix placeholder -->
        <!-- <option
          v-if="props.placeholder"
          value=""
          disabled
          hidden
          selected
        >
          {{ props.placeholder }}
        </option> -->
        <option v-for="option in props.options" :value="option">
          {{ option }}
        </option>
      </select>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import Icon from './Icon.vue'

const props = defineProps<{
  type?: string,
  modelValue: string | number | boolean | undefined,
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
.input-base
  display: inline-flex
  overflow: hidden
  border: 2px solid var(--border-accent)
  border-radius: 8px

  input
    border-radius: 8px 0 0 8px
    padding: 10px 10px
    // FIXME: idk how to fix this padding problem
    width: calc(100% - 20px)
    background-color: var(--background-primary)
    color: var(--text-primary)

    &::placeholder
      color: var(--text-secondary)

  .input-base__search
    display: inline-flex
    overflow: hidden

    min-width: 200px
    max-width: 100%

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

  .input-base__input-field
    display: inline-flex

  .input-base__select
    display: inline-flex
    overflow: hidden
    width: 100%

    select
      width: 100%
      padding: 10px 10px
      background-color: transparent
      color: var(--text-primary)
      text-transform: capitalize
      cursor: pointer
      option
        outline: none
        border: none
        padding: 2em
        background-color: var(--background-primary)
        color: var(--text-primary)

</style>
