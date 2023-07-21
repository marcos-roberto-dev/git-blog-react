import { styled } from 'styled-components'
import { useCallback, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

import rehypeRaw from 'rehype-raw'

import {
  FaChevronLeft,
  FaArrowUpRightFromSquare,
  FaGithub,
  FaCalendarDay,
  FaComment,
} from 'react-icons/fa6'
import { ContainerLayout, LayoutAdjustment } from '../../styles/LayoutAdjusment'
import { Card } from '../../components/shared/Card'
import {
  IPublication,
  PublicationContext,
} from '../../contexts/PublicationsContext'
import { LinkWithoutStyle } from '../../components/shared/LinkWithoutSyle'
import { dateFormatter, dateFormmaterInHours } from '../../utils/formatter'
import { PublicationMarkdown } from '../PublicationsPage/components/PublicationMarkdown'

const CardPublicationContent = styled.div`
  width: 100%;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      text-decoration: none;
      color: ${(props) => props.theme.blue};

      svg {
        width: 12px;
      }
    }
  }

  div {
    margin-top: 1.25rem;
  }

  ul {
    margin-top: 0.5rem;
    display: flex;
    list-style: none;
    gap: 2rem;

    li {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      color: ${(props) => props.theme['base-span']};
    }
  }
`

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
