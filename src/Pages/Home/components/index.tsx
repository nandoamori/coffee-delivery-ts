import { useState, useEffect } from 'react'
import { ShoppingCart, Minus, Plus } from 'phosphor-react'

import { api } from '../../../services/api'

import {
  CoffeeAll,
  CoffeeCard,
  CoffeeContainer,
  ButtonAddToCart,
  ButtonRemoveToCart,
  ButtonGroup,
  AddCoffee,
  PriceCoffee,
  Loading,
  CounterToCart,
  ButtonCart,
} from './styles'

export interface CoffeeProps {
  id: number
  image: string
  label: string
  title: string
  description: string
  price: number
}

export function CoffeeList() {
  const [quantity, setQuantity] = useState(1)
  const [coffees, setCoffees] = useState([])

  useEffect(() => {
    api.get('/coffees').then((response) => {
      setCoffees(response.data)
    })
  }, [])

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevState) => prevState - 1)
    }
  }

  const handleIncrement = () => {
    setQuantity((prevState) => prevState + 1)
  }

  return (
    <CoffeeContainer>
      <h2>Nossos cafés</h2>
      {coffees.length === 0 && (
        <Loading>Carregando cafés disponíveis...</Loading>
      )}
      <CoffeeAll>
        {coffees &&
          coffees.map((coffee: CoffeeProps) => {
            return (
              <CoffeeCard key={coffee.id} title={coffee.title}>
                <img src={coffee.image} alt="" />
                <p>{coffee.label}</p>
                <h4>{coffee.title}</h4>
                <h5>{coffee.description}</h5>
                <AddCoffee>
                  <PriceCoffee>
                    <span>R$ </span>
                    <h6> {coffee.price.toFixed(2)}</h6>
                  </PriceCoffee>

                  <ButtonGroup>
                    <ButtonRemoveToCart type="button" onClick={handleDecrement}>
                      <Minus />
                    </ButtonRemoveToCart>
                    <CounterToCart type="text" value={quantity} />
                    <ButtonAddToCart type="button" onClick={handleIncrement}>
                      <Plus />
                    </ButtonAddToCart>
                  </ButtonGroup>
                  <ButtonCart>
                    <ShoppingCart size={34} weight="fill" />
                  </ButtonCart>
                </AddCoffee>
              </CoffeeCard>
            )
          })}
      </CoffeeAll>
    </CoffeeContainer>

    // <CoffeeContainer>
    //   <CoffeeAll>
    //     <CoffeeCard>
    //       <ButtonGroup>
    //         <ButtonRemoveToCart type="button" onClick={handleDecrement} />
    //         <CounterToCart>
    //           <p>{quantity}</p>
    //         </CounterToCart>
    //         <ButtonAddToCart type="button" onClick={handleIncrement} />
    //       </ButtonGroup>
    //     </CoffeeCard>
    //   </CoffeeAll>
    // </CoffeeContainer>
  )
}
