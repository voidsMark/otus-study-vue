<template>
  <div class="checkbox-base">
    <input
      v-bind="fieldAttrs"
      v-model="inputValue"
      type="checkbox"
      class="checkbox-base__input"
      @change="handleChange"
      @blur="emits('blur')"
    >
    <label class="checkbox-base__label" @click="inputValue = !inputValue">
      <slot />
    </label>

    <div v-if="props.error" class="input-error">
      {{ props.error.toString() }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, computed } from 'vue'

const props = defineProps<{
  error?: string
  modelValue?: boolean
  disabled?: boolean
}>()

const emits = defineEmits(['update:modelValue', 'blur'])

const inputValue = ref(props.modelValue)

watch(() => props.modelValue, () => {
  inputValue.value = props.modelValue
})

const fieldAttrs = computed(() => {
  const { error, ...rest } = props
  return rest
})

const handleChange = () => {
  emits('update:modelValue', inputValue.value)
}
</script>

<style lang="sass">
.checkbox-base
  display: inline-flex

  input
    cursor: pointer
    margin-right: 8px

  .checkbox-base__label
    cursor: pointer
    user-select: none

  .input-error
    color: var(--text-error)
    font-size: 0.875rem
    margin-left: 16px
</style>
