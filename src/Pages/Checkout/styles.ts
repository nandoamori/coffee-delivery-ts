import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  margin-top: 2.5rem;
  gap: 2rem;
`
export const SectionBaseStyle = styled.div`
  width: 100%;
  background: ${(props) => props.theme['gray-100']};
  border-radius: 6px;
  padding: 2.5rem;
`
