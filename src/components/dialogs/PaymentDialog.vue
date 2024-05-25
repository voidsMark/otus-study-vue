<template>
  <DialogBase :showDialog="props.showDialog" disableScroll @close="handleClose">
    <template #title>
      Proceed payment
    </template>

    <template #content>
      <Form>
        <div class="payment-dialog">
          <Field v-slot="{ field, errorMessage }" name="name" rules="required">
            <InputBase
              v-bind="field"
              v-model="userData.name"
              type="text"
              placeholder="Name"
              :error="errorMessage"
            />
          </Field>

          <div class="input-row">
            <Field v-slot="{ field, errorMessage }" name="email" rules="required|email">
              <InputBase
                v-bind="field"
                v-model="userData.email"
                type="text"
                placeholder="Email"
                :error="errorMessage"
              />
            </Field>
            <Field v-slot="{ field, errorMessage }" name="phone" rules="required">
              <InputBase
                v-bind="field"
                v-model="userData.phone"
                type="text"
                placeholder="Phone"
                :error="errorMessage"
              />
            </Field>
          </div>

          <Field v-slot="{ field, errorMessage }" name="address" rules="required">
            <InputBase
              v-bind="field"
              v-model="userData.address"
              type="text"
              placeholder="Address"
              :error="errorMessage"
            />
          </Field>

          <div class="input-card-group">
            <Field v-slot="{ field, errorMessage }" name="cardNumber" rules="required|min:16">
              <InputBase
                v-bind="field"
                v-model="userData.cardNumber"
                type="text"
                placeholder="Card Number"
                :error="errorMessage"
              />
            </Field>
            <Field v-slot="{ field, errorMessage }" name="cardExpiry" rules="required|min:4">
              <InputBase
                v-bind="field"
                v-model="userData.cardExpiry"
                type="text"
                placeholder="MM/YY"
                :error="errorMessage"
              />
            </Field>
            <Field v-slot="{ field, errorMessage }" name="cardCVC" rules="required|min:3">
              <InputBase
                v-bind="field"
                v-model="userData.cardCVC"
                type="text"
                placeholder="CVC"
                :error="errorMessage"
              />
            </Field>
          </div>

          <Field v-slot="{ field, errorMessage }" name="productId" rules="required">
            <CheckboxBase
              v-model="userData.agreement"
              v-bind="field"
              :error="errorMessage"
            >
              I agree to the
              <RouterLink class="accent" to="/terms">
                terms and conditions
              </RouterLink>
            </CheckboxBase>
          </Field>
        </div>
      </Form>
    </template>

    <template #actions>
      <ButtonBase :disabled="!isFormValid" @click="submitForm">
        Apply
      </ButtonBase>
    </template>
  </DialogBase>
</template>

<script lang="ts" setup>
import { reactive, computed } from 'vue'
import { defineRule, configure, Form, Field } from 'vee-validate'
import { required, email as veeEmail, min } from '@vee-validate/rules'
import { storeApi } from '@/api/store'

import DialogBase from './DialogBase.vue'
import ButtonBase from '../ButtonBase.vue'
import InputBase from '../InputBase.vue'
import CheckboxBase from '../CheckboxBase.vue'

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
  agreement: false,
})

defineRule('required', required)
defineRule('email', veeEmail)
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

const handleClose = () => {
  emits('close')
}

const isFormValid = computed(() => userData.email && userData.name && userData.phone && userData.address && userData.cardNumber && userData.cardExpiry && userData.cardCVC && userData.agreement)

const submitForm = async () => {
  const { email, name, phone, address, cardNumber } = userData
  const order: Market.Order = {
    productId: props.productId.toString(),
    name,
    email,
    phone,
    address,
    cardNumber,
    date: new Date(),
  }
  try {
    await storeApi.createOrder(order)
    handleClose()
  } catch (error) {
    console.log('PaymentDialog: submitForm error:', error)
    // TODO: show error to user
  }
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
