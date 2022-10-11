import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

type ShopCartProviderProps = {
  children: ReactNode
}

type CartItem = {
  id: number
  quantity: number
}

type ShopCartContextTypes = {
  addToCart: (id: number) => void
  getItemQuantity: (id: number) => number
  increaseCartQuantity: (id: number) => void
  decreaseCartQuantity: (id: number) => void
  removeFromCart: (id: number) => void
  cartQuantity: number
  cartItems: CartItem[]
}

const ShopCartContext = createContext({} as ShopCartContextTypes)

export function useShopCart() {
  return useContext(ShopCartContext)
}

const COFFEE_ITEMS_STORAGE_KEY = 'coffeeDelivery: cartItems'

export function ShopCartProvider({ children }: ShopCartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY)
    if (storedCartItems) {
      return JSON.parse(storedCartItems)
    }
    return []
  })

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0,
  )

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0
  }

  function addToCart(id: number) {
    const itemInCart = cartItems.find((item) => item.id === id)
    if (!itemInCart) {
      return [...cartItems, { id, quantity: 0 }]
    } else {
      itemInCart.quantity = itemInCart.quantity + 0
    }
    setCartItems(cartItems)
  }

  function increaseCartQuantity(id: number) {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id) == null) {
        return [...currentItems, { id, quantity: 1 }]
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function decreaseCartQuantity(id: number) {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id)?.quantity === 1) {
        return currentItems.filter((item) => item.id !== id)
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function removeFromCart(id: number) {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id)
    })
  }

  useEffect(() => {
    localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <ShopCartContext.Provider
      value={{
        addToCart,
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,

        cartItems,
        cartQuantity,
      }}
    >
      {children}
    </ShopCartContext.Provider>
  )
}
