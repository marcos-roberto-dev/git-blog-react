import { styled } from 'styled-components'
import { ContainerLayout, LayoutAdjustment } from '../../styles/LayoutAdjusment'
import { PublicationCard } from './components/PublicationCard'
import { PublicationProfileCard } from './components/PublicationProfileCard'
import { PublicationForm } from './components/PublicationForm'
import { useContext } from 'react'
import { PublicationContext } from '../../contexts/PublicationsContext'

const PublicationsContainer = styled.main`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`

export function PublicationsPage() {
  const { publications } = useContext(PublicationContext)
  return (
    <ContainerLayout>
      <LayoutAdjustment>
        <PublicationProfileCard />
      </LayoutAdjustment>

      <PublicationForm />
      {publications && (
        <PublicationsContainer>
          {publications.items.map((publication) => (
            <PublicationCard
              key={publication.number}
              content={publication.body}
              date={publication.created_at}
              title={publication.title}
              numberIssue={publication.number}
            />
          ))}
        </PublicationsContainer>
      )}
    </ContainerLayout>
  )
}
