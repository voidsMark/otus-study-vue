<template>
  <div class="main-page">
    <div class="container">
      <div class="main-page__items-grid">
        <MarketItem
          v-for="item in products"
          :key="item.id"
          class="market__item"
          :img="item.image"
          :title="item.title"
          :price="item.price"
          :category="item.category"
          :grade="item.rating.rate"
          :commentsCount="item.rating.count"
          @click="openProduct(item.id)"
        />
      </div>
      <div v-if="showLoader" class="loader">
        <LoaderBase />
      </div>

      <div v-if="noProductsByFilters" class="no-products-placeholder">
        Sorry, there are no products<br>that match your search
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount, computed } from 'vue'
import MarketItem from '@/components/MarketItem.vue'
import LoaderBase from '@/components/loaderBase.vue'
import { useProductStore } from '@/stores/productStore'

const productStore = useProductStore()

onBeforeMount(async () => {
  await productStore.getProducts()
})
const products = computed(() => productStore.filteredProducts)

const noProductsByFilters = computed(() => {
  const { priceMin, priceMax, category } = productStore.filters
  const hasFilters = priceMin || priceMax || category
  if (hasFilters && !products.value.length) {
    return true
  }
  return false
})
const showLoader = computed(() => !products.value.length && !noProductsByFilters.value)

const openProduct = (id: number) => {
  // TODO: open product
  console.log(id)
}

</script>

<style lang="sass">
.main-page
  .main-page__items-grid
    margin-top: 20px

    display: grid
    grid-template-columns: repeat(4, minmax(160px, 1fr))
    grid-auto-rows: minmax(300px, 500px)
    grid-gap: 20px
    justify-content: center
    @media(max-width: 800px)
      grid-template-columns: repeat(2, minmax(160px, 1fr))
      justify-items: center

  .loader
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)

  .no-products-placeholder
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)

    text-align: center
    font-size: 24px
    color: var(--text-secondary)

</style>
