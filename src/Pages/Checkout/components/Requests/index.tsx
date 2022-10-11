import { useShopCart } from '../../../../contexts/ShopCartContext'
import { CartItem } from '../CartItems/CartItem'
import coffees from '../../../../data/coffees.json'

import {
  CheckRequest,
  ButtonConfirm,
  TotalItems,
  TotalPrice,
  RequestItems,
} from './styles'

export function Requests() {
  const { cartItems } = useShopCart()
  return (
    <CheckRequest>
      <h2>Cafés selecionados</h2>
      <RequestItems>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
        <hr />
        <TotalItems>
          <TotalPrice>
            <p>Total de itens</p>
            <strong>
              <span>R$</span>
              {cartItems
                .reduce((total, cartItem) => {
                  const item = coffees.find((i) => i.id === cartItem.id)
                  return total + (item?.price || 0) * cartItem.quantity
                }, 0)
                .toFixed(2)}
            </strong>
          </TotalPrice>
          <TotalPrice>
            <small>Entrega</small>
            <small>R$ 3,50</small>
          </TotalPrice>
          <TotalPrice>
            <strong>Total</strong>
            <strong>
              <span>R$</span>
              {cartItems
                .reduce((total, cartItem) => {
                  const item = coffees.find((i) => i.id === cartItem.id)
                  return total + (item?.price || 0) * cartItem.quantity
                }, 3.5)
                .toFixed(2)}
            </strong>
          </TotalPrice>
        </TotalItems>

        <ButtonConfirm type="button">CONFIRMAR PEDIDO</ButtonConfirm>
      </RequestItems>
    </CheckRequest>
  )
}
