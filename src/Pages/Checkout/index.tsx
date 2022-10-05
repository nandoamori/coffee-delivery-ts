import { CheckoutItems } from './components/CheckoutItems'
import { Requests } from './components/Requests'
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <CheckoutItems />
      <Requests />
    </CheckoutContainer>
  )
}
