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
          :error="getError('name')"
        />

        <div class="input-row">
          <InputBase
            v-model="userData.email"
            type="text"
            placeholder="Email"
            :error="getError('email')"
          />
          <InputBase
            v-model="userData.phone"
            type="text"
            placeholder="Phone"
            :error="getError('phone')"
          />
        </div>

        <InputBase
          v-model="userData.address"
          type="text"
          placeholder="Address"
          :error="getError('address')"
        />

        <div class="input-card-group">
          <InputBase
            v-model="userData.cardNumber"
            type="text"
            placeholder="Card Number"
            :error="getError('cardNumber')"
          />
          <InputBase
            v-model="userData.cardExpiry"
            type="text"
            placeholder="MM/YY"
            :error="getError('cardExpiry')"
          />
          <InputBase
            v-model="userData.cardCVC"
            type="text"
            placeholder="CVC"
            :error="getError('cardCVC')"
          />
        </div>
      </div>
    </template>

    <template #actions>
      <ButtonBase @click="submitForm">
        Apply
      </ButtonBase>
    </template>
  </DialogBase>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { defineRule, configure } from 'vee-validate'
import { required, email, min } from '@vee-validate/rules'

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
  cardExpiry: '',
  cardCVC: '',
})

defineRule('required', required)
defineRule('email', email)
defineRule('min', min)

configure({
  generateMessage: (ctx) => {
    const messages = {
      required: 'This field is required',
      email: 'Invalid email',
      min: `Field must be at least ${(ctx.rule?.params as number[])[0]} characters`,
    }

    return messages[ctx.rule?.name as keyof typeof messages] ? messages[ctx.rule?.name as keyof typeof messages] : `Field ${ctx.field} incorrect`
  },
})

const getError = (field: string) => `error ${field}`

const handleClose = () => {
  emits('close')
}

const submitForm = async () => {
  console.log('PaymentDialog: submitForm()')
}
</script>

<style lang="sass">
.payment-dialog
  display: flex
  flex-direction: column
  gap: 8px

  .input-row
    display: flex
    justify-content: space-between
    gap: 16px

    .input-base
      flex: 1

.input-card-group
  display: grid
  grid-template-columns: 2fr 1fr 1fr
  gap: 16px
</style>
