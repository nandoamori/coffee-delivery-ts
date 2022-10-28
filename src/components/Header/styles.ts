import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme['white-background']};
  padding: 2rem 0;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;

  nav {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    div {
      display: flex;
      align-items: center;
      background: ${(props) => props.theme['purple-100']};
      color: ${(props) => props.theme['purple-400']};
      font-size: 0.875rem;
      line-height: 130%;
      padding: 0.5rem;
      border-radius: 6px;
      border: none;
    }

    a {
      color: ${(props) => props.theme['yellow-600']};
      background: ${(props) => props.theme['yellow-100']};
      border-radius: 6px;
      padding: 0.4rem;
    }

    span {
      text-align: center;
      background: ${(props) => props.theme['purple-400']};
      border-radius: 50%;
      padding: 0.2rem 0.5rem;
      position: absolute;
      right: -0.5rem;
      top: 1rem;
      transform: 'translate(25%, 25%)';
      color: ${(props) => props.theme['gray-100']};
    }
  }
`
