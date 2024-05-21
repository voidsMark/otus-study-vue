<template>
  <DialogBase :showDialog="props.showDialog" disableScroll @close="handleClose">
    <template #title>
      Proceed payment
    </template>

    <template #content>
      <div class="payment-dialog">
        <InputBase
          v-model="userData.name"
          type="text"
          placeholder="Name"
        />

        <InputBase
          v-model="userData.email"
          type="text"
          placeholder="Email"
        />

        <InputBase
          v-model="userData.phone"
          type="text"
          placeholder="Phone"
        />

        <InputBase
          v-model="userData.address"
          type="text"
          placeholder="Address"
        />

        <InputBase
          v-model="userData.cardNumber"
          type="text"
          placeholder="Card"
        />
      </div>
    </template>

    <template #actions>
      <ButtonBase
        @click="handleClose"
      >
        Apply
      </ButtonBase>
    </template>
  </DialogBase>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

import DialogBase from './DialogBase.vue'
import ButtonBase from '../ButtonBase.vue'
import InputBase from '../InputBase.vue'

const props = defineProps<{
  showDialog: boolean,
  productId: string | number
}>()

const emits = defineEmits(['close'])

const userData = reactive({
  email: '',
  name: '',
  phone: '',
  address: '',
  cardNumber: '',
})

const handleClose = () => {
  emits('close')
}
</script>

<style lang="sass">
.payment-dialog
  display: flex
  flex-direction: column
</style>
