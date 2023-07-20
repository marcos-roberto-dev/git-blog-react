import { ContainerLayout, LayoutAdjustment } from '../../styles/LayoutAdjusment'
import { ProfileCard } from '../../components/ProfileCard'

export function PublicationContentPage() {
  return (
    <ContainerLayout>
      <LayoutAdjustment>
        <ProfileCard />
      </LayoutAdjustment>
    </ContainerLayout>
  )
}
