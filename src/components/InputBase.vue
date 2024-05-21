<template>
  <div class="input-base">
    <div class="input-base__input-field">
      <template v-if="props.type === 'number'">
        <input v-model.number="inputValue" :placeholder="placeholder" @change="handleChange">
      </template>

      <template v-if="props.type === 'text'">
        <input v-model="inputValue" :placeholder="placeholder" @change="handleChange">
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

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

  .input-base__input-field
    display: inline-flex
</style>
