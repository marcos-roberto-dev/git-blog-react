import { useCallback, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import {
  FaChevronLeft,
  FaArrowUpRightFromSquare,
  FaGithub,
  FaCalendarDay,
  FaComment,
} from 'react-icons/fa6'

import {
  IPublication,
  PublicationContext,
} from '../../contexts/PublicationsContext'
import { LinkWithoutStyle } from '../../components/shared/LinkWithoutSyle'
import { PublicationMarkdown } from '../PublicationsPage/components/PublicationMarkdown'
import { ContainerLayout, LayoutAdjustment } from '../../styles/LayoutAdjusment'
import { Card } from '../../components/shared/Card'
import { CardPublicationContent } from './styles'

import { dateFormatter, dateFormmaterInHours } from '../../utils/formatter'

export function PublicationContentPage() {
  const { loadPublication } = useContext(PublicationContext)
  const [publication, setPublication] = useState<IPublication>()
  const params = useParams()

  const loadPublicationContent = useCallback(async () => {
    if (params.id) {
      const response = await loadPublication(params.id)

      if (response) {
        setPublication(response)
      }
    }
  }, [loadPublication, params.id])

  useEffect(() => {
    loadPublicationContent()
  }, [loadPublicationContent])

  return (
    publication && (
      <ContainerLayout>
        <LayoutAdjustment>
          <Card>
            <CardPublicationContent>
              <header>
                <LinkWithoutStyle to="/">
                  <FaChevronLeft />
                  <span>VOLTAR</span>
                </LinkWithoutStyle>
                <a href={publication.html_url} target="_blank" rel="noreferrer">
                  <span>VER NO GITHUB</span>
                  <FaArrowUpRightFromSquare />
                </a>
              </header>

              <div>
                <h1>{publication.title}</h1>
                <ul>
                  <li>
                    <FaGithub />
                    <span>
                      {publication.assignee
                        ? publication.assignee.login
                        : 'Anônimo'}
                    </span>
                  </li>
                  <li>
                    <FaCalendarDay />
                    <time
                      dateTime={dateFormatter.format(
                        new Date(publication.created_at),
                      )}
                      title={dateFormatter.format(
                        new Date(publication.created_at),
                      )}
                    >
                      {dateFormmaterInHours(publication.created_at)}
                    </time>
                  </li>
                  <li>
                    <FaComment />
                    <span>{publication.comments} comentários</span>
                  </li>
                </ul>
              </div>
            </CardPublicationContent>
          </Card>

          <PublicationMarkdown content={publication.body} />
        </LayoutAdjustment>
      </ContainerLayout>
    )
  )
}
