import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

import { BannerContainer, Description } from './styles'
import bannerImage from '../../../../assets/coffee-banner.png'
import { TextWithIcon } from '../../../../components/TextWithIcon'
import { defaultTheme } from '../../../../styles/themes/default'

export function Banner() {
  return (
    <BannerContainer className="container">
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <h3>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </h3>
        <Description>
          <TextWithIcon
            iconBg={defaultTheme['yellow-600']}
            icon={<ShoppingCart weight="fill" />}
            text="Compra simples e segura"
          />
          <TextWithIcon
            iconBg={defaultTheme['gray-600']}
            icon={<Package weight="fill" />}
            text="Embalagem mantém o café intacto"
          />
          <TextWithIcon
            iconBg={defaultTheme['yellow-500']}
            icon={<Timer weight="fill" />}
            text="Entrega rápida e rastreada"
          />
          <TextWithIcon
            iconBg={defaultTheme['purple-400']}
            icon={<Coffee weight="fill" />}
            text="O café chega fresquinho até você"
          />
        </Description>
      </div>
      <img src={bannerImage} alt="" />
    </BannerContainer>
  )
}
