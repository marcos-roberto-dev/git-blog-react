import { useCallback, useEffect, useState } from 'react'
import {
  dateFormatter,
  dateFormmaterInHours,
} from '../../../../utils/formatter'
import { PublicationCardContainer } from './styles'
import { apiGitHubMarkdown } from '../../../../services/api'
import { shotText } from '../../../../utils/shortText'
import { LinkWithoutStyle } from '../../../../components/shared/LinkWithoutSyle'

interface PublicationCardProps {
  title: string
  date: string
  content: string
  numberIssue: number
}

export function PublicationCard({
  content,
  date,
  title,
  numberIssue,
}: PublicationCardProps) {
  const [htmlByData, setHtmlByData] = useState('')

  const generateTextByMarkdown = useCallback(async () => {
    const rootText = document.createElement('div')
    const response = await apiGitHubMarkdown(content)
    if (response) {
      rootText.innerHTML = response.data
      setHtmlByData((rootText.querySelector('p') as HTMLDivElement).innerText)
    }
  }, [content])

  useEffect(() => {
    generateTextByMarkdown()
  }, [generateTextByMarkdown])

  return (
    <LinkWithoutStyle to={`publicacao/${numberIssue}`}>
      <PublicationCardContainer>
        <header>
          <h1>{title}</h1>
          <time
            dateTime={dateFormatter.format(new Date(date))}
            title={dateFormatter.format(new Date(date))}
          >
            {dateFormmaterInHours(date)}
          </time>
        </header>
        <div>{shotText(htmlByData)}</div>
      </PublicationCardContainer>
    </LinkWithoutStyle>
  )
}
