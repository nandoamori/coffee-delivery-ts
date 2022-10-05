import { HomeContainer } from './styles'

import { Banner } from './components/banner'
import { CoffeeList } from './components'

export function Home() {
  return (
    <HomeContainer>
      <Banner />
      <CoffeeList />
    </HomeContainer>
  )
}
