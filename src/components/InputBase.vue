<template>
  <div class="input-base">
    <div class="input-base__input-field">
      <template v-if="props.type === 'number'">
        <input
          v-model.number="inputValue"
          :placeholder="props.placeholder"
          v-bind="fieldAttrs"
          @change="handleChange"
          @blur="emits('blur')"
        >
      </template>

      <template v-if="props.type === 'text'">
        <input
          v-model="inputValue"
          :placeholder="props.placeholder"
          v-bind="fieldAttrs"
          @change="handleChange"
          @blur="emits('blur')"
        >
      </template>
    </div>
    <div v-if="props.error" class="input-error">
      {{ props.error.toString() }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, computed } from 'vue'

const props = defineProps<{
  type?: string,
  modelValue: string | number | boolean | undefined,
  placeholder?: string,
  error?: string
}>()
const emits = defineEmits(['update:modelValue', 'blur'])

const inputValue = ref(props.modelValue)

watch(() => props.modelValue, () => {
  inputValue.value = props.modelValue
})

const fieldAttrs = computed(() => {
  const { modelValue, error, ...rest } = props
  return rest
})

const handleChange = () => {
  emits('update:modelValue', inputValue.value)
}
</script>

<style lang="sass">
.input-base
  display: inline-flex
  flex-direction: column
  overflow: hidden

  .input-base__input-field
    display: inline-flex
    border: 2px solid var(--border-accent)
    border-radius: 8px

    input
      border-radius: 8px
      padding: 10px 10px
      // FIXME: idk how to fix this padding problem
      width: calc(100% - 20px)
      background-color: var(--background-primary)
      color: var(--text-primary)

      &::placeholder
        color: var(--text-secondary)

.input-error
  color: var(--text-error)
  font-size: 0.875rem
  margin-left: 16px
</style>
