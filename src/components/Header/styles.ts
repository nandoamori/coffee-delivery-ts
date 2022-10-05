import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

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
  }
`
