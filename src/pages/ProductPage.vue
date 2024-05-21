<template>
  <div class="product-page">
    <div class="container">
      <div v-if="product" class="product-page__grid-container">
        <div class="product-page__product-preview">
          <img :src="product.image" alt="Product image">
        </div>

        <div class="product-page__product-info">
          <div class="product-title">
            {{ product.title }}
          </div>

          <div class="product-stats">
            <div class="rating">
              <Icon icon="grade" />
              {{ product.rating.rate }}
            </div>

            <div class="comments">
              <Icon icon="comment" />
              {{ product.rating.count }}
            </div>

            <!-- TODO: Move it out of here -->
            <div class="category">
              {{ product.category }}
            </div>
          </div>

          <div class="product-description">
            {{ product.description }}
          </div>

          <div class="product-additional-data">
            Very scanty API. Too low data provided :c
          </div>
        </div>

        <div class="product-page__payment">
          <div class="price">
            {{ priceUSD(product.price) }}
          </div>

          <div class="button-group">
            <ButtonBase flat @click="handleBuyNow">
              Buy now
            </ButtonBase>
            <ButtonBase @click="handleAddToCart">
              Add to cart
            </ButtonBase>
          </div>
        </div>
      </div>

      <!-- TODO: Maybe later ill add suggestions or similar products. Maybe... -->
    </div>

    <div v-if="!product" class="loader">
      <loaderBase />
    </div>

    <PaymentDialog
      v-if="product"
      :productId="product.id"
      :showDialog="showPaymentDialog"
      @close="() => showPaymentDialog = false"
    />
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { onBeforeMount, ref } from 'vue'
import { storeApi } from '@/api/store'
import { priceUSD } from '@/utils/format'

import Icon from '@/components/Icon.vue'
import loaderBase from '@/components/loaderBase.vue'
import ButtonBase from '@/components/ButtonBase.vue'
import PaymentDialog from '@/components/dialogs/PaymentDialog.vue'

const currentRoute = useRoute()
const product = ref<Market.Product>()
onBeforeMount(async () => {
  product.value = await storeApi.getProduct(currentRoute.params.productId as string)
})

const showPaymentDialog = ref(false)
const handleBuyNow = () => {
  showPaymentDialog.value = true
  console.log('Buy now')
}

const handleAddToCart = () => {
  // TODO: Make it work
  console.log('Add to cart')
}

</script>

<style lang="sass">
.product-page
  // flex: 1 1 auto
  .product-page__grid-container
    margin-top: 60px
    display: grid
    grid-template-columns: 2fr 3fr 2fr
    grid-gap: 24px

    .product-page__product-preview
      display: flex
      background-color: var(--background-white)
      border-radius: 12px

      img
        width: 100%
        object-fit: scale-down
        border-radius: 12px

    .product-page__product-info
      display: flex
      flex-direction: column
      gap: 20px

      .product-title
        font-size: 24px

      .product-stats
        display: flex
        gap: 24px
        .rating, .comments, .category
          display: inline-flex
          align-items: center
          gap: 8px
        .rating
          svg
            fill: var(--text-warning)
        .comments
          svg
            fill: var(--text-secondary)
        .category
          margin-left: auto
          margin-right: 0
          text-transform: capitalize
          color: var(--text-secondary)

      .product-additional-data
        color: var(--text-secondary)

    .product-page__payment
      display: flex
      flex-direction: column
      gap: 20px

      .price
        font-size: 24px

      .button-group
        display: flex
        gap: 8px
        .button-base
          flex: 1 0 auto
</style>
