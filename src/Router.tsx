import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './DefaultLayout'

import { Checkout } from './Pages/Checkout'
import { Home } from './Pages/Home'
import { Success } from './Pages/OrderConfirmed'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  )
}

export default Router
