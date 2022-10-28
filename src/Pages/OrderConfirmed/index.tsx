/* eslint-disable jsx-a11y/alt-text */
import { OrderDetailsContainer, SuccessContainer } from './styles'
import { TextWithIcon } from '../../components/TextWithIcon'

import { MapPin, Clock, CurrencyDollar } from 'phosphor-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { NewRequestFormData } from '../Checkout'
import { paymentMethods } from '../Checkout/components/OrderRequest/PaymentMethodOptions'
import { useEffect } from 'react'
import { defaultTheme } from '../../styles/themes/default'
import deliveryImg from '../../assets/delivery.png'

interface LocationType {
  state: NewRequestFormData
}

export function Success() {
  const { state } = useLocation() as unknown as LocationType

  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [])

  if (!state) return <></>

  return (
    <SuccessContainer className="container">
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <h3>Agora é só aguardar que logo o café chegará até você</h3>
      </div>

      <section>
        <OrderDetailsContainer>
          <TextWithIcon
            icon={<MapPin weight="fill" />}
            iconBg={defaultTheme['purple-400']}
            text={
              <p>
                Entrega em <strong>{state.street}</strong>, {state.number}
                <br />
                {state.district} - {state.city}, {state.uf}
              </p>
            }
          />

          <TextWithIcon
            icon={<Clock weight="fill" />}
            iconBg={defaultTheme['yellow-500']}
            text={
              <p>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </p>
            }
          />

          <TextWithIcon
            icon={<CurrencyDollar weight="fill" />}
            iconBg={defaultTheme['yellow-600']}
            text={
              <p>
                Pagamento na entrega
                <br />
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
              </p>
            }
          />
        </OrderDetailsContainer>
        <img src={deliveryImg} alt="" />
      </section>
    </SuccessContainer>
  )
}
