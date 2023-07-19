import { styled } from 'styled-components'
import Background from './assets/background-header.svg'
import Logo from './assets/github-blog.svg'
import { CardProfile } from './components/CardProfile'
import { ContainerLayout, LayoutAdjustment } from './styles/LayoutAdjusment'
import { PublicationForm } from './components/PublicationForm'
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
        <PublicationForm />
      </ContainerLayout>
    </>
  )
}

export default App
