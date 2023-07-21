import { createContext, useEffect, useState } from 'react'
import { apiGitHubIssues, apiGitHubSearchIssues } from '../services/api'

interface IAssignee {
  login: string
}

export interface IPublication {
  html_url: string
  title: string
  created_at: string
  body: string
  comments: string
  assignee: IAssignee
  number: number
}

interface PublicationDataRequest {
  items: IPublication[]
  total_count: number
}

interface IPublicationContext {
  publications: PublicationDataRequest | null
  loadPublications: (query: string) => Promise<void>
  loadPublication: (numberIssue: string) => Promise<IPublication | void>
}

export const PublicationContext = createContext({} as IPublicationContext)

interface PublicationContextProviderProps {
  children: React.ReactNode
}

export function PublicationContextProvider({
  children,
}: PublicationContextProviderProps) {
  const [publications, setPublications] =
    useState<PublicationDataRequest | null>(null)

  async function loadPublications(query: string): Promise<void> {
    const response = await apiGitHubSearchIssues<PublicationDataRequest>(query)
    if (response) {
      const newPublications = response.data.items.map((publication) => ({
        html_url: publication.html_url,
        title: publication.title,
        created_at: publication.created_at,
        body: publication.body,
        comments: publication.comments,
        assignee: publication.assignee,
        number: publication.number,
      }))

      setPublications((state) => ({
        ...state,
        items: newPublications,
        total_count: response.data.total_count,
      }))
    }
  }

  async function loadPublication(
    numberIssue: string,
  ): Promise<IPublication | void> {
    const response = await apiGitHubIssues<IPublication>(numberIssue)

    if (response) {
      const { assignee, body, comments, created_at, html_url, number, title } =
        response.data

      return {
        assignee,
        body,
        comments,
        created_at,
        html_url,
        number,
        title,
      }
    }
  }

  useEffect(() => {
    loadPublications('')
  }, [])

  return (
    <PublicationContext.Provider
      value={{ publications, loadPublications, loadPublication }}
    >
      {children}
    </PublicationContext.Provider>
  )
}
