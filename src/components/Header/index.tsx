import Background from '../../assets/background-header.svg'
import Logo from '../../assets/github-blog.svg'
import { BackgroundHeader, HeaderContainer, LogoHeader } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <BackgroundHeader src={Background} alt="background" />
      <LogoHeader src={Logo} alt="Logo" />
    </HeaderContainer>
  )
}
