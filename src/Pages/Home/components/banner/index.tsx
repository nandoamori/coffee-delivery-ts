import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

import { BannerContainer, Description, Items } from './styles'
import bannerImage from '../../../../assets/coffee-banner.png'

export function Banner() {
  return (
    <BannerContainer>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <Description>
          <Items>
            <ShoppingCart size={32} />
            <span>Compra simples e segura</span>
          </Items>
          <Items>
            <Package size={32} />
            <span>Embalagem mantém o café intacto</span>
          </Items>
          <Items>
            <Timer size={32} />
            <span>Entrega rápida e rastreada</span>
          </Items>
          <Items>
            <Coffee size={32} />
            <span>O café chega fresquinho até você</span>
          </Items>
        </Description>
      </div>
      <img src={bannerImage} alt="" />
    </BannerContainer>
  )
}
