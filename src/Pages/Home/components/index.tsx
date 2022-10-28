import { ShoppingCart, Minus, Plus } from 'phosphor-react'

import {
  CoffeeAll,
  CoffeeCard,
  CoffeeContainer,
  ButtonAddToCart,
  ButtonRemoveToCart,
  ButtonGroup,
  AddCoffee,
  PriceCoffee,
  CounterToCart,
  ButtonCart,
} from './styles'

import coffees from '../../../data/coffees.json'
import { useShopCart } from '../../../contexts/ShopCartContext'

export interface CoffeeProps {
  id: number
  image: string
  label: string
  title: string
  description: string
  price: number
}

export function CoffeeList() {
  const {
    addToCart,
    getItemQuantity,
    decreaseCartQuantity,
    increaseCartQuantity,
  } = useShopCart()

  return (
    <CoffeeContainer className="container">
      <CoffeeAll>
        {coffees.map((item) => {
          return (
            <CoffeeCard key={item.id}>
              <img src={`../../public/coffees/${item.image}`} alt="" />
              <p>{item.label}</p>
              <h4>{item.title}</h4>
              <h5>{item.description}</h5>
              <AddCoffee>
                <PriceCoffee>
                  <span>R$ </span>
                  <h6> {item.price.toFixed(2)}</h6>
                </PriceCoffee>

                <ButtonGroup>
                  <ButtonRemoveToCart
                    type="button"
                    onClick={() => decreaseCartQuantity(item.id)}
                  >
                    <Minus />
                  </ButtonRemoveToCart>
                  <CounterToCart>{getItemQuantity(item.id)}</CounterToCart>
                  <ButtonAddToCart
                    type="button"
                    onClick={() => increaseCartQuantity(item.id)}
                  >
                    <Plus />
                  </ButtonAddToCart>
                </ButtonGroup>
                <ButtonCart onClick={() => addToCart(item.id)}>
                  <ShoppingCart size={34} weight="fill" />
                </ButtonCart>
              </AddCoffee>
            </CoffeeCard>
          )
        })}
      </CoffeeAll>
    </CoffeeContainer>
  )
}
