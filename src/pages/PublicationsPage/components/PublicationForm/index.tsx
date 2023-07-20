import { PublicationsFormContainer } from './styles'

export function PublicationForm() {
  return (
    <PublicationsFormContainer>
      <header>
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </header>
      <form action="">
        <input type="text" placeholder="Buscar conteúdo" />
      </form>
    </PublicationsFormContainer>
  )
}
