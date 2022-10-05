import styled from 'styled-components'

export const CoffeeContainer = styled.section`
  display: flex;
  margin-top: 6.75rem;
  flex-direction: column;

  h2 {
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    font-weight: 800;
    text-align: flex-start;
  }
`
export const Loading = styled.h1`
  color: ${(props) => props.theme['gray-600']};
  font-size: 1rem;
`

export const CoffeeAll = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 2rem;
  row-gap: 2.5rem;
  flex-wrap: wrap;
  margin: 3.375rem 0;
`
export const CoffeeCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme['gray-100']};
  color: ${(props) => props.theme['yellow-100']};

  width: 14rem;
  height: 19.4rem;
  border-radius: 6px 36px;

  img {
    width: 120px;
    height: 120px;
    margin-top: calc(0px - 1.5rem - 6px);
  }

  p {
    background: ${(props) => props.theme['yellow-100']};
    color: ${(props) => props.theme['yellow-600']};
    font-weight: bold;
    line-height: 130%;
    border-radius: 14px;
    padding: 0.25rem 0.5rem;
    margin-top: 0.75rem;
  }

  h4 {
    font-family: 'Baloo 2', cursive;
    font-size: 1.25rem;
    font-weight: bold;
    color: ${(props) => props.theme['gray-700']};
    margin-top: 1rem;
  }

  h5 {
    color: ${(props) => props.theme['gray-500']};
    text-align: center;
    margin-top: 0.5rem;
  }

  h6 {
    font-family: 'Baloo 2', cursive;
    font-size: 1.5rem;
    font-weight: bold;
    color: ${(props) => props.theme['gray-600']};
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-600']};
    text-align: end;
  }
`

export const AddCoffee = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
`
export const PriceCoffee = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.2rem;
`
export const ButtonGroup = styled.article`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme['gray-300']};
  border-radius: 6px;
  padding: 0.5rem;
`
export const ButtonCart = styled.div`
  svg {
    border-radius: 6px;
    padding: 0.5rem;
    background: ${(props) => props.theme['purple-400']};
    color: ${(props) => props.theme['gray-100']};
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme['purple-300']};
    }
  }
`
export const ButtonAddToCart = styled.button`
  color: ${(props) => props.theme['purple-300']};
  border: none;
  background: transparent;
`
export const ButtonRemoveToCart = styled.button`
  border: none;
  background: transparent;
  color: ${(props) => props.theme['purple-300']};
`

export const CounterToCart = styled.input`
  width: 1rem;
  color: ${(props) => props.theme['gray-800']};
  text-align: center;
  background: transparent;
  border: none;
`
