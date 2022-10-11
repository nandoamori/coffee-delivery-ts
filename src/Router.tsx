import { Route, Routes } from 'react-router-dom'
import { ShopCartProvider } from './contexts/ShopCartContext'

import { DefaultLayout } from './DefaultLayout'

import { Checkout } from './Pages/Checkout'
import { Home } from './Pages/Home'
import { Success } from './Pages/Success'

function Router() {
  return (
    <ShopCartProvider>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
        </Route>
      </Routes>
    </ShopCartProvider>
  )
}

export default Router
