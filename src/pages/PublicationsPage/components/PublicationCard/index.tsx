import { PublicationCardContainer } from './styles'

export function PublicationCard() {
  return (
    <PublicationCardContainer>
      <header>
        <h1>JavaScript data types and data structures</h1>
        <time dateTime="2016-08-09 08:00" title="2016-08-09 08:00">
          Há 1 dia
        </time>
      </header>
      <p>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This PublicationCardContainer
        attempts to list the built-in data structures available in JavaScript
        and what properties they have. These can be used to build other data
      </p>
    </PublicationCardContainer>
  )
}
