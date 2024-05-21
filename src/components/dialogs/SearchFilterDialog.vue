<template>
  <DialogBase :showDialog="props.showDialog" disableScroll @close="handleClose">
    <template #title>
      Filters
    </template>

    <template #content>
      <div class="filter">
        <div class="filter__title">
          Price
        </div>
        <div class="input-group">
          <InputBase :modelValue="filters.priceMin" type="number" placeholder="Min" @update:modelValue="filters.priceMin = $event" />
          -
          <InputBase :modelValue="filters.priceMax" type="number" placeholder="Max" @update:modelValue="filters.priceMax = $event" />
        </div>
      </div>

      <div class="filter">
        <div class="filter__title">
          Category
        </div>
        <div class="input-group">
          <InputBase
            :modelValue="filters.category"
            type="select"
            placeholder="Choose category"
            :options="categories"
            @update:modelValue="filters.category = $event"
          />
        </div>
      </div>
    </template>

    <template #actions>
      <ButtonBase flat @click="handleClear">
        Clear
      </ButtonBase>

      <ButtonBase @click="handleApply">
        Apply
      </ButtonBase>
    </template>
  </DialogBase>
</template>

<script lang="ts" setup>
import { reactive, computed } from 'vue'
import { useProductStore } from '@/stores/product'

import ButtonBase from '@/components/ButtonBase.vue'
import InputBase from '../InputBase.vue'
import DialogBase from './DialogBase.vue'

const props = defineProps<{
  showDialog: boolean
}>()
const emits = defineEmits(['close', 'apply'])

const productStore = useProductStore()

const categories = computed(() => productStore.categories)

const filters = reactive<Market.Filters>({
  priceMin: undefined,
  priceMax: undefined,
  category: undefined,
})

const handleClear = () => {
  filters.priceMin = undefined
  filters.priceMax = undefined
  filters.category = undefined
}
const handleClose = () => {
  emits('close')
}

const handleApply = () => {
  emits('apply', filters)
}
</script>

<style lang="sass">
.filter
  display: flex
  flex-direction: column
  gap: 8px
  width: 100%
  margin-bottom: 12px

  .input-group
    display: flex
    flex-direction: row
    align-items: center
    gap: 8px
    width: 100%

    .input-base
      flex-grow: 1

</style>
@/stores/Products@/stores/products@/stores/product
