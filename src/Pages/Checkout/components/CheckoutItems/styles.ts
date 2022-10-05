import styled from 'styled-components'

export const CheckoutContent = styled.section`
  display: flex;
  flex-direction: column;

  gap: 0.75rem;
`
export const AddressData = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const CheckAddress = styled.article`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background: ${(props) => props.theme['gray-100']};
  border-radius: 6px;
  margin-top: 0.8rem;

  svg {
    color: ${(props) => props.theme['yellow-500']};
  }
`

export const CardPayment = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 0.75rem;

  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`
export const Card = styled.button`
  display: flex;
  justify-content: center;
  padding: 1rem;
  gap: 0.75rem;

  background: ${(props) => props.theme['gray-300']};

  font-size: 0.75rem;
  color: ${(props) => props.theme['gray-600']};

  &:hover {
    background: ${(props) => props.theme['gray-400']};
  }

  &:active {
    outline: 0;
    box-shadow: 0 0 0 1px ${(props) => props.theme['purple-300']};
  }
`

export const CheckPayment = styled.article`
  background: ${(props) => props.theme['gray-100']};
  border-radius: 6px;
  padding: 2.5rem;

  svg {
    color: ${(props) => props.theme['purple-300']};
  }
`

export const InputsText = styled.article`
  display: flex;
  flex-direction: column;

  gap: 1rem;
  margin-top: 2rem;

  div {
    width: 100%;
    display: flex;
    gap: 1rem;
  }
`

export const Inputs = styled.input`
  background: ${(props) => props.theme['gray-200']};
  border: 1px solid ${(props) => props.theme['gray-300']};
  border-radius: 4px;
  padding: 0.75rem;

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${(props) => props.theme['yellow-600']};
  }
  ::placeholder {
    color: ${(props) => props.theme['gray-500']};
    font-size: 0.875rem;
  }

  :nth-of-type(2n - 1) {
    width: 12.75rem;
  }

  :nth-of-type(4) {
    width: 21.75rem;
  }

  :nth-of-type(6) {
    width: 17.25rem;
  }
  :nth-last-child(1) {
    width: 30%;
  }
`
