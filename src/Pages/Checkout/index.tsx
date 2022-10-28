/* eslint-disable no-unused-vars */
import { Requests } from './components/Requests'
import { CheckoutContainer } from './styles'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { useShopCart } from '../../contexts/ShopCartContext'
import { useNavigate } from 'react-router-dom'
import { CompleteOrderForm } from './components/OrderRequest'

enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}

const newRequestValidationSchema = zod.object({
  zipcode: zod.string().min(8, 'Informe o CEP'),
  street: zod.string().min(3, 'Informe a Rua'),
  number: zod.string().min(1, 'Informe o Número'),
  complement: zod.string(),
  district: zod.string().min(3, 'Informe o Bairro'),
  city: zod.string().min(2, 'Informe a Cidade'),
  uf: zod.string().min(2, 'Informe o Estado'),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: 'Informe o método de pagamento' }
    },
  }),
})

export type NewRequestFormData = zod.infer<typeof newRequestValidationSchema>

export type ConfirmFormData = NewRequestFormData

export function Checkout() {
  const newRequest = useForm<ConfirmFormData>({
    resolver: zodResolver(newRequestValidationSchema),
    defaultValues: {
      paymentMethod: undefined,
    },
  })

  const { clearCart } = useShopCart()
  const navigate = useNavigate()

  const { handleSubmit } = newRequest

  function handleSubmitRequests(data: ConfirmFormData) {
    navigate('/success', {
      state: data,
    })
    clearCart()
  }

  return (
    <FormProvider {...newRequest}>
      <CheckoutContainer
        className="container"
        onSubmit={handleSubmit(handleSubmitRequests)}
      >
        <CompleteOrderForm />
        <Requests />
      </CheckoutContainer>
    </FormProvider>
  )
}
