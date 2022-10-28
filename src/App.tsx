import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import { ShopCartProvider } from './contexts/ShopCartContext'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ShopCartProvider>
          <Router />
        </ShopCartProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
