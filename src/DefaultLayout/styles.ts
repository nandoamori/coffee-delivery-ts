import styled from 'styled-components'

export const LayoutContainer = styled.div`
  padding: 0 8rem;
  background: ${(props) => props.theme['white-background']};
  color: ${(props) => props.theme['gray-600']};

  display: flex;
  flex-direction: column;
`