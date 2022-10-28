import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 5rem;

  h1 {
    color: ${(props) => props.theme['yellow-600']};
  }

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const OrderDetailsContainer = styled.div`
  padding: 2.5rem;
  position: relative;
  min-width: 32rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 6px 36px 6px 36px;
  border: double 1px transparent;
  background-image: linear-gradient(
      ${(props) => props.theme['gray-100']},
      ${(props) => props.theme['gray-100']}
    ),
    radial-gradient(circle at top left, #dbac2c, #8047f8);
  background-origin: border-box;
  background-clip: padding-box, border-box;
`
