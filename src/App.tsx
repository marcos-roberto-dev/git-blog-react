import { styled } from 'styled-components'
import Background from './assets/background-header.svg'
import Logo from './assets/github-blog.svg'
import { CardProfile } from './components/CardProfile'
import { LayoutAdjustment } from './styles/LayoutAdjusment'
const HeaderContainer = styled.header`
  width: 1440px;
  margin: 0 auto;
`

const BackgroundHeader = styled.img`
  z-index: 1;
`

const LogoHeader = styled.img`
  position: absolute;
  top: 4rem;
  left: 50%;
  transform: translate(-50%, -0%);
  max-width: 9.25rem;
  width: 100%;
  z-index: 1;
`

const ContainerLayout = styled.div`
  max-width: 864px;
  width: 100%;
  margin: 0 auto;
`

function App() {
  return (
    <>
      <HeaderContainer>
        <BackgroundHeader src={Background} alt="background" />
        <LogoHeader src={Logo} alt="Logo" />
      </HeaderContainer>
      <ContainerLayout>
        <LayoutAdjustment>
          <CardProfile />
        </LayoutAdjustment>
      </ContainerLayout>
    </>
  )
}

export default App
