import { Minus, Plus, Trash } from 'phosphor-react'
import { useShopCart } from '../../../../contexts/ShopCartContext'
import coffees from '../../../../data/coffees.json'

import {
  CounterToCart,
  ButtonAddToCart,
  ButtonRemoveToCart,
} from '../../../Home/components/styles'

import {
  SelectedCoffee,
  QuantityItems,
  ButtonDelete,
  CheckQuantity,
} from './styles'

type CartItemProps = {
  id: number
  quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
  const { decreaseCartQuantity, increaseCartQuantity, removeFromCart } =
    useShopCart()

  const item = coffees.find((item) => item.id === id)
  if (item == null) {
    return null
  }
  return (
    <div>
      <hr />
      <SelectedCoffee key={item.id}>
        <img src={item.image} alt="" />
        <QuantityItems>
          <p>{item.title}</p>
          <CheckQuantity>
            <ButtonRemoveToCart
              type="button"
              onClick={() => decreaseCartQuantity(id)}
            >
              <Minus />
            </ButtonRemoveToCart>
            <CounterToCart>{quantity}</CounterToCart>
            <ButtonAddToCart
              type="button"
              onClick={() => increaseCartQuantity(id)}
            >
              <Plus />
            </ButtonAddToCart>
            <ButtonDelete type="button" onClick={() => removeFromCart(id)}>
              <Trash />
              REMOVER
            </ButtonDelete>
          </CheckQuantity>
        </QuantityItems>

        <strong>
          <span>R$ </span>
          {(item.price * quantity).toFixed(2)}
        </strong>
      </SelectedCoffee>
    </div>
  )
}
