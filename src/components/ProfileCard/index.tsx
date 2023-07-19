import { ProfileCardContainer } from './styles'
import {
  FaUserGroup,
  FaArrowUpRightFromSquare,
  FaGithub,
} from 'react-icons/fa6'

export function ProfileCard() {
  return (
    <ProfileCardContainer>
      <div>
        <img
          src="https://avatars.githubusercontent.com/u/55327245?v=4"
          alt="perfil"
        />
        <div>
          <div>
            <header>
              <h2>Marcos Roberto</h2>
              <a href="#">
                <span>GITHUB</span>
                <FaArrowUpRightFromSquare />
              </a>
            </header>
            <p>
              Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
              viverra massa quam dignissim aenean malesuada suscipit. Nunc,
              volutpat pulvinar vel mass.
            </p>
          </div>

          <nav>
            <ul>
              <a href="#">
                <FaGithub />
                <span>marcos-roberto-dev </span>
              </a>
              <a href="#">
                <FaUserGroup />
                <span>10 seguidores</span>
              </a>
            </ul>
          </nav>
        </div>
      </div>
    </ProfileCardContainer>
  )
}
