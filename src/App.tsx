import { styled } from 'styled-components'
import Background from './assets/background-header.svg'
import Logo from './assets/github-blog.svg'
import { ContainerLayout, LayoutAdjustment } from './styles/LayoutAdjusment'
import { PublicationForm } from './components/PublicationForm'
import { ProfileCard } from './components/ProfileCard'
import { PublicationCard } from './components/PublicationCard'

const HeaderContainer = styled.header`
  margin: 0 auto;
`

const BackgroundHeader = styled.img`
  width: 100%;
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

const PublicationsContainer = styled.main`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
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
          <ProfileCard />
        </LayoutAdjustment>
        <PublicationForm />

        <PublicationsContainer>
          <PublicationCard />
          <PublicationCard />
          <PublicationCard />
          <PublicationCard />
          <PublicationCard />
          <PublicationCard />
        </PublicationsContainer>
      </ContainerLayout>
    </>
  )
}

export default App
