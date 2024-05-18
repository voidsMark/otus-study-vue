<template>
  <div v-if="props.showDialog" class="dialog-base__overlay" @click="handleClose" />
  <div v-if="props.showDialog" class="dialog-base">
    <div class="dialog-base__header">
      <div class="dialog-base__title">
        <slot name="title">
          Title
        </slot>
      </div>

      <!-- TODO: Create IconButton and use it instead of Icon -->
      <Icon icon="close" class="dialog-base__close-button" @click="handleClose" />
    </div>

    <div class="dialog-base__content">
      <slot name="content" />
    </div>

    <div class="dialog-base__actions">
      <slot name="actions" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { watch } from 'vue'

import Icon from '../Icon.vue'

const props = defineProps<{
  showDialog: boolean,
  disableScroll?: boolean
}>()
const emits = defineEmits(['close'])

watch(() => props.showDialog, () => {
  if (!props.disableScroll) return

  document.body.style.overflow = props.showDialog ? 'hidden' : 'auto'
})

const handleClose = () => {
  emits('close')
  console.log('close')
}

</script>

<style lang="sass">
.dialog-base__overlay
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  background-color: rgba(0, 0, 0, 0.5)
  z-index: 5000

.dialog-base
  position: fixed
  z-index: 10000
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)

  display: flex
  flex-direction: column

  min-width: 300px
  min-height: 200px
  padding: 20px

  background-color: var(--background-primary)
  border-radius: 12px
  box-shadow: 0 0 10px 0 var(--background-black)

  .dialog-base__header
    display: flex
    justify-content: space-between
    align-items: center
    margin-bottom: 20px

    .dialog-base__title
      font-size: 16px
      font-weight: 600

    .dialog-base__close-button
      margin-right: 0px
      margin-left: auto
      fill: var(--text-primary)
      cursor: pointer

  .dialog-base__content
    display: flex
    flex-direction: column

  .dialog-base__actions
    display: flex
    justify-content: end
    align-items: center
    gap: 12px
    margin-top: auto
    margin-bottom: 0
    padding-top: 20px
</style>
