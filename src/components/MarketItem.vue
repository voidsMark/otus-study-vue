<template>
  <div class="market-item">
    <img v-if="props.img" :src="props.img" alt="preview" class="item-preview">
    <img v-else src="../assets/img/no-picture.jpg" alt="preview" class="item-preview">

    <div class="data">
      <div class="price-category">
        <div class="price">
          {{ priceUSD(props.price) }}
        </div>
        <div class="category">
          {{ props.category }}
        </div>
      </div>
      <div class="title">
        {{ props.title }}
      </div>
      <div class="feedback">
        <div v-if="props.commentsCount" class="comments">
          <Icon icon="comment" />
          {{ props.commentsCount || 0 }}
        </div>
        <div v-if="props.grade" class="grade">
          <Icon icon="grade" />
          {{ props.grade }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { priceUSD } from '@/utils/format'
import Icon from './Icon.vue'
// TODO: replace props as a typed object
const props = defineProps<{
  img?: string,
  title: string,
  price: number,
  category: string,
  grade?: number,
  commentsCount?: number
}>()

</script>

<style lang="sass">
.market-item
  display: flex
  flex-direction: column
  align-items: center

  border-radius: 8px
  width: clamp(50px, 100%, 320px)
  cursor: pointer
  &:hover
    border: 1px solid var(--border-hover)
    padding: 4px
  &:active
    border: 1px solid var(--border-accent)

  .item-preview
    width: 100%
    height: clamp(200px, 100%, 380px)
    object-fit: scale-down
    border-radius: 8px
    background-color: var(--background-white)

  .data
    margin-top: 4px
    display: flex
    flex-direction: column
    align-items: start
    row-gap: 4px
    width: 100%

    .price-category
      width: 100%
      display: inline-flex
      flex-direction: row
      justify-content: space-between

    .title
      text-overflow: ellipsis

    .feedback
      display: flex
      flex-direction: row
      gap: 8px

      .grade, .comments
        display: inline-flex
        align-items: center
        color: var(--text-secondary)
        svg
          margin-right: 8px

      .grade
        svg
          fill: var(--text-warning)

      .comments
        svg
          fill: var(--text-secondary)

</style>../utils/format
