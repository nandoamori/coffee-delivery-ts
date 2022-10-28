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

  h3 {
    font-size: 1.25rem;
    font-weight: normal;
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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
`
