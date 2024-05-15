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
          :grade="item.rating.rate"
          :comments-count="item.rating.count"
          @click="openProduct(item.id)"
        />
      </div>
      <div class="loader">
        <LoaderBase v-if="!products.length" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount, shallowRef } from 'vue'
import { storeApi } from '@/api/store'
import MarketItem from '@/components/MarketItem.vue'
import LoaderBase from '@/components/loaderBase.vue'

const products = shallowRef<Market.Item[]>([])

onBeforeMount(async () => {
  products.value = await storeApi.getProducts()
  console.log(products)
})

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

</style>
