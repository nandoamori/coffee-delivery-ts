import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        background: ${(props) => props.theme['white-background']};
        color: ${(props) => props.theme['gray-600']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    } 

    button {
        cursor: pointer;
        border-radius: 6px;
        border: none;
    }
`
