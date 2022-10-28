import styled, { css } from 'styled-components'

export const OrderContainer = styled.div`
  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    ${({ theme }) => css`
      background: ${(props) => props.theme['purple-100']};
      border-color: ${(props) => props.theme['purple-300']};

      &:hover {
        background: ${(props) => props.theme['purple-300']};
      }
    `}
  }
`

export const ContentContainer = styled.div`
  padding: 0 1rem;
  background: ${(props) => props.theme['gray-300']};
  color: ${(props) => props.theme['gray-600']};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  border-radius: 6px;
  height: 3rem;
  border: 1px solid ${(props) => props.theme['gray-300']};
  transition: 0.4s;

  svg {
    color: ${(props) => props.theme['purple-300']};
  }

  &:hover {
    background: ${(props) => props.theme['gray-400']};
  }

  user-select: none;
`
