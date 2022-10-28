import { HomeContainer } from './styles'

import { Banner } from './components/banner'
import { CoffeeList, CoffeeProps } from './components'

export function Home({ ...props }: CoffeeProps) {
  return (
    <HomeContainer>
      <Banner />
      <CoffeeList {...props} />
    </HomeContainer>
  )
}
