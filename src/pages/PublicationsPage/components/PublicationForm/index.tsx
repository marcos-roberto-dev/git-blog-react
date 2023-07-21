import { useForm } from 'react-hook-form'
import { PublicationsFormContainer } from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { PublicationContext } from '../../../../contexts/PublicationsContext'

const searchFormSchema = z.object({
  search: z.string(),
})

type SearchForm = z.infer<typeof searchFormSchema>

export function PublicationForm() {
  const { loadPublications, publications } = useContext(PublicationContext)
  const { handleSubmit, register } = useForm<SearchForm>({
    defaultValues: {
      search: '',
    },
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSubmitForm(data: SearchForm) {
    await loadPublications(data.search)
  }

  return (
    <PublicationsFormContainer>
      <header>
        <h3>Publicações</h3>
        <span>{publications?.total_count} publicações</span>
      </header>
      <form action="" onSubmit={handleSubmit(handleSubmitForm)}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('search')}
        />
      </form>
    </PublicationsFormContainer>
  )
}
