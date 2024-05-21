<template>
  <div class="app-header__backing" />
  <header class="app-header">
    <div class="container">
      <div class="app-header__start">
        <router-link class="app-header__link" to="/">
          <img src="../assets/blobs/logo.png" alt="logo" class="app-header__logo">
        </router-link>
      </div>

      <TheSearchField
        :modelValue="searchQuery"
        @update:modelValue="updateSearch"
        @openSearchFilters="handleOpenFilters"
      />

      <div class="app-header__end">
        <router-link class="app-header__link" to="/orders">
          <Icon icon="box" />
          <span class="desktop-only">Orders</span>
        </router-link>

        <router-link class="app-header__link" to="/favorites">
          <Icon icon="favorite" />
          <span class="desktop-only">Favorites</span>
        </router-link>

        <router-link class="app-header__link" to="/cart">
          <Icon icon="cart" />
          <span class="desktop-only">Cart</span>
        </router-link>

        <router-link class="app-header__link" to="/account">
          <Icon icon="account" />
          <span class="desktop-only">Account</span>
        </router-link>
      </div>
    </div>
  </header>
  <SearchFiltersDialog :showDialog="showFilters" @close="handleCloseFilters" @apply="handleApplyFilters" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useProductStore } from '@/stores/product'
import Icon from './Icon.vue'
import TheSearchField from './TheSearchField.vue'
import SearchFiltersDialog from './dialogs/SearchFilterDialog.vue'

const router = useRouter()
const productStore = useProductStore()

const searchQuery = ref('')
const updateSearch = (query: string) => {
  if (!query) return
  console.log('TheHeader: updateSearch', query)

  searchQuery.value = query
  productStore.setSearchQuery(searchQuery.value)
  router.push('/')
}

const showFilters = ref(false)
const handleOpenFilters = () => {
  showFilters.value = true
}
const handleCloseFilters = () => {
  showFilters.value = false
}

const handleApplyFilters = (e: Market.Filters) => {
  console.log('TheHeader: handleApplyFilters', e)

  productStore.setFilters(e)
  showFilters.value = false
  router.push('/')
}

</script>

<style lang="sass">
.app-header__backing
  height: 72px

  @media(max-width: 800px)
    height: 48px

.app-header
  user-select: none
  background-color: var(--background-primary)
  border-bottom: 1px solid var(--background-secondary)
  flex-shrink: 0
  height: 72px
  position: fixed
  left: 0
  right: 0
  top: 0
  z-index: 1000

  @media(max-width: 800px)
    height: 48px

  .container
    display: flex
    align-items: center
    justify-content: space-between
    gap: 20px
    height: 100%

    .app-header__logo
      width: clamp(0px, 100%, 200px)
      max-width: 200px
      max-height: 68px
      @media(max-width: 800px)
        max-height: 44px

    .app-header__start, .app-header__end
      width: 280px
      display: inline-flex

    .app-header__end
      justify-content: space-evenly

  .app-header__link
    display: flex
    flex-direction: column
    align-items: center
    svg
      fill: var(--text-primary)
</style>
@/stores/Products@/stores/products
@/stores/product
