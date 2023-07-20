import { styled } from 'styled-components'
import { ContainerLayout, LayoutAdjustment } from '../../styles/LayoutAdjusment'
import { ProfileCard } from '../../components/ProfileCard'
import { PublicationForm } from '../../components/PublicationForm'
import { PublicationCard } from '../../components/PublicationCard'

const PublicationsContainer = styled.main`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`

export function PublicationsPage() {
  return (
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
  )
}
