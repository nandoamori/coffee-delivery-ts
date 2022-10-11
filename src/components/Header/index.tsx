import { HeaderContainer } from './styles'
import logo from '../../assets/coffee-logo.svg'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useShopCart } from '../../contexts/ShopCartContext'

export function Header() {
  const { cartQuantity } = useShopCart()
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logo} alt="" />
      </NavLink>

      <nav>
        <div>
          <MapPin size={22} weight="fill" />
          <p>Porto Alegre, RS</p>
        </div>
        <NavLink to="/checkout" title="Checkout">
          <ShoppingCart size={22} weight="fill" />
          {cartQuantity > 0 && <span>{cartQuantity}</span>}
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
