import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from 'phosphor-react'

import {
  CheckoutContent,
  CheckAddress,
  CheckPayment,
  AddressData,
  CardPayment,
  Card,
  InputsText,
  Inputs,
} from './styles'

export function CheckoutItems() {
  return (
    <CheckoutContent>
      <h2>Complete seu pedido</h2>
      <CheckAddress>
        <AddressData>
          <div>
            <MapPinLine size={22} />
          </div>
          <div>
            <h2>Endereço de entrega</h2>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </AddressData>

        <InputsText>
          <Inputs type="text" placeholder="CEP" />
          <Inputs type="text" placeholder="Rua" />
          <div>
            <Inputs type="text" placeholder="Número" />
            <Inputs type="text" placeholder="Complemento" />
          </div>
          <div>
            <Inputs type="text" placeholder="Bairro" />
            <Inputs type="text" placeholder="Cidade" />
            <Inputs type="text" placeholder="UF" />
          </div>
        </InputsText>
      </CheckAddress>
      <CheckPayment>
        <AddressData>
          <CurrencyDollar size={22} />
          <h2>Pagamento</h2>
        </AddressData>
        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
        <CardPayment>
          <Card>
            <CreditCard />
            <p>CARTÃO DE CRÉDITO</p>
          </Card>
          <Card>
            <Bank />
            <p>CARTÃO DE DÉBITO</p>
          </Card>
          <Card>
            <Money />
            <p>DINHEIRO</p>
          </Card>
        </CardPayment>
      </CheckPayment>
    </CheckoutContent>
  )
}
