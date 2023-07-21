import { useEffect, useState } from 'react'
import { Card } from '../../../../components/shared/Card'
import { ProfileCardContainer } from './styles'
import {
  FaUserGroup,
  FaArrowUpRightFromSquare,
  FaGithub,
} from 'react-icons/fa6'
import { apiGitHubUser } from '../../../../services/api'

export interface UserGithub {
  html_url: string
  bio: string
  avatar_url: string
  followers: number
  name: string
  login: string
}

export function PublicationProfileCard() {
  const [user, setUser] = useState<UserGithub | null>(null)

  async function loadUserDataAPI() {
    const response = await apiGitHubUser.get<UserGithub>('')
    const { avatar_url, bio, followers, html_url, login, name } = response.data
    setUser({ avatar_url, bio, followers, html_url, login, name })
  }

  useEffect(() => {
    loadUserDataAPI()
  }, [])

  return (
    <Card>
      <ProfileCardContainer>
        <img src={user?.avatar_url} alt="perfil" />
        <div>
          <div>
            <header>
              <h2>{user?.name}</h2>
              <a href={user?.html_url} target="_blank" rel="noreferrer">
                <span>GITHUB</span>
                <FaArrowUpRightFromSquare />
              </a>
            </header>
            <p>{user?.bio}</p>
          </div>

          <nav>
            <ul>
              <a href="#">
                <FaGithub />
                <span>{user?.login}</span>
              </a>
              <a href="#">
                <FaUserGroup />
                <span>{user?.followers} seguidores</span>
              </a>
            </ul>
          </nav>
        </div>
      </ProfileCardContainer>
    </Card>
  )
}
