import styled from 'styled-components'
export const SelectedCoffee = styled.div`
  display: flex;
  padding: 1.5rem 0;
  justify-content: space-between;
  gap: 1.25rem;

  strong {
    display: flex;
    gap: 0.25rem;
  }
`

export const QuantityItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`
export const ButtonDelete = styled.button`
  display: flex;
  justify-content: center;
  padding: 1rem;
  gap: 0.25rem;
  margin-left: 0.5rem;

  background: ${(props) => props.theme['gray-300']};

  font-size: 0.75rem;
  color: ${(props) => props.theme['gray-600']};

  &:hover {
    background: ${(props) => props.theme['gray-400']};
  }

  svg {
    color: ${(props) => props.theme['purple-300']};
  }
`

export const CheckQuantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TotalItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.5rem 0;
`

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ButtonConfirm = styled.button`
  width: 100%;
  background: ${(props) => props.theme['yellow-500']};

  padding: 0.75rem 0.5rem;
  font-weight: bold;
  color: ${(props) => props.theme['gray-100']};

  &:hover {
    background-color: ${(props) => props.theme['yellow-600']};
  }
`
