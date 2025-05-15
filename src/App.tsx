import { Container } from './components/container/Container'
import { CountDown } from './components/countDown/CountDown'
import { Logo } from './components/logo/Logo'
import { Menu } from './components/menu/Menu'

import './styles/global.css'
import './styles/themes.css'

function App() {

  return (
    <>
        <title>Polmodoro App</title>
        <Container>
            <Logo />
        </Container>
        <Container>
          <Menu />
        </Container>
        <Container>
          <CountDown />
        </Container>
        


    </>
  )
}

export default App
