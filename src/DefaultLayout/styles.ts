import styled from 'styled-components'

export const LayoutContainer = styled.div`
  background: ${(props) => props.theme['white-background']};
  color: ${(props) => props.theme['gray-600']};

  display: flex;
  flex-direction: column;

  .container {
    width: 100%;
    max-width: 70rem;
    margin-right: auto;
    margin-left: auto;
  }
`
