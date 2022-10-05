import styled from 'styled-components'

export const BannerContainer = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    font-weight: 800;

    color: ${(props) => props.theme['gray-800']};
  }

  p {
    font-size: 1.25rem;
  }
`

export const Description = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2.5rem;
  row-gap: 1.25rem;

  margin-top: 4.125rem;
`

export const Items = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;

  svg {
    background: ${(props) => props.theme['yellow-600']};
    border-radius: 16px;
    padding: 0.5rem;
  }
`
