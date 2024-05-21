<template>
  <div class="select-field">
    <!-- TODO: Create custom select component -->
    <select
      id="select"
      v-model="selectedValue"
      name="select"
      @change="handleChange"
    >
      <!-- TODO: Fix placeholder -->
      <option v-for="option in props.options" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

const props = defineProps<{
  modelValue: string | number | undefined,
  placeholder?: string,
  options: string[]
}>()
const emits = defineEmits(['update:modelValue', 'openSearchFilters'])

const selectedValue = ref(props.modelValue)

watch(() => props.modelValue, () => {
  selectedValue.value = props.modelValue
})

const handleChange = () => {
  emits('update:modelValue', selectedValue.value)
}

</script>

<style lang="sass">
.select-field
  display: inline-flex
  overflow: hidden
  border: 2px solid var(--border-accent)
  border-radius: 8px
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
