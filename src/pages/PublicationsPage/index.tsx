import { styled } from 'styled-components'
import { ContainerLayout, LayoutAdjustment } from '../../styles/LayoutAdjusment'
import { PublicationCard } from './components/PublicationCard'
import { PublicationProfileCard } from './components/PublicationProfileCard'
import { PublicationForm } from './components/PublicationForm'

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
        <PublicationProfileCard />
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
