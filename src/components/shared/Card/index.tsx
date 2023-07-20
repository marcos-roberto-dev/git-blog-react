import { CardContainer } from './styles'

interface CardProps {
  children: React.ReactNode
}

export function Card({ children }: CardProps) {
  return (
    <CardContainer>
      <div>{children}</div>
    </CardContainer>
  )
}
