import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import { ContentContainer, OrderContainer } from './styles'

type OrderInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode
  label: string
}

// eslint-disable-next-line react/display-name
export const OrderInput = forwardRef<HTMLInputElement, OrderInputProps>(
  ({ id, icon, label, ...props }, ref) => {
    return (
      <OrderContainer>
        <input id={id} type="radio" {...props} name="paymentMethod" ref={ref} />
        <label htmlFor={id}>
          <ContentContainer>
            {icon}
            {label}
          </ContentContainer>
        </label>
      </OrderContainer>
    )
  },
)
