import { FaChevronLeft } from 'react-icons/fa6'
import { ContainerLayout, LayoutAdjustment } from '../../styles/LayoutAdjusment'
import { ProfileCardContainer } from '../../components/ProfileCard/styles'

export function PublicationContentPage() {
  return (
    <ContainerLayout>
      <LayoutAdjustment>
        <ProfileCardContainer>
          <div>
            <header>
              <a href="#">
                <FaChevronLeft />
                <span>VOLTAR</span>
              </a>
            </header>
          </div>
        </ProfileCardContainer>
      </LayoutAdjustment>
    </ContainerLayout>
  )
}
