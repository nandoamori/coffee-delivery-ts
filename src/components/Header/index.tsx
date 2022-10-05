import { HeaderContainer } from './styles'
import logo from '../../assets/coffee-logo.svg'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <nav>
        <div>
          <MapPin size={22} weight="fill" />
          <p>Porto Alegre, RS</p>
        </div>
        <NavLink to="/checkout" title="Checkout">
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
