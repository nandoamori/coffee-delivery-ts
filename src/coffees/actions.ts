import { Coffee } from './reducer'

export enum ActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_TO_CART = 'REMOVE_TO_CART',
  INCREASE_CART_QUANTITY = 'INCREASE_CART_QUANTITY',
  DECREASE_CART_QUANTITY = 'DECREASE_CART_QUANTITY',
}

export function addToCart(newCart: Coffee) {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: {
      newCart,
    },
  }
}

export function removeFromCart() {
  return {
    type: ActionTypes.REMOVE_TO_CART,
  }
}

export function increaseCartQuantity() {
  return {
    type: ActionTypes.INCREASE_CART_QUANTITY,
  }
}

export function decreaseCartQuantity() {
  return {
    type: ActionTypes.DECREASE_CART_QUANTITY,
  }
}
