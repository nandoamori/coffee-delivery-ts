import { Minus, Plus, Trash } from 'phosphor-react'
import {
  CounterToCart,
  ButtonAddToCart,
  ButtonRemoveToCart,
} from '../../../Home/components/styles'

import {
  CheckRequest,
  ButtonConfirm,
  TotalItems,
  TotalPrice,
  RequestItems,
  SelectedCoffee,
  QuantityItems,
  ButtonDelete,
  CheckQuantity,
} from './styles'

export function Requests() {
  return (
    <CheckRequest>
      <h2>Cafés selecionados</h2>
      <RequestItems>
        <hr />
        <SelectedCoffee>
          <img src="./src/assets/expresso-cremoso.png" alt="" />
          <QuantityItems>
            <p>Expresso tradicional</p>
            <CheckQuantity>
              <ButtonRemoveToCart type="button">
                <Minus />
              </ButtonRemoveToCart>
              <CounterToCart type="text" />
              <ButtonAddToCart type="button">
                <Plus />
              </ButtonAddToCart>
              <ButtonDelete>
                <Trash />
                REMOVER
              </ButtonDelete>
            </CheckQuantity>
          </QuantityItems>
          <strong>R$ 9,90</strong>
        </SelectedCoffee>
        <hr />
        <TotalItems>
          <TotalPrice>
            <p>Total de itens</p>
            <p>R$ 29,70</p>
          </TotalPrice>
          <TotalPrice>
            <small>Entrega</small>
            <small>R$ 3,50</small>
          </TotalPrice>
          <TotalPrice>
            <strong>Total</strong>
            <strong>R$ 33,20</strong>
          </TotalPrice>
        </TotalItems>

        <ButtonConfirm type="button">CONFIRMAR PEDIDO</ButtonConfirm>
      </RequestItems>
    </CheckRequest>
  )
}
