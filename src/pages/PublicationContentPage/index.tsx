import {
  FaChevronLeft,
  FaArrowUpRightFromSquare,
  FaGithub,
  FaCalendarDay,
  FaComment,
} from 'react-icons/fa6'
import { ContainerLayout, LayoutAdjustment } from '../../styles/LayoutAdjusment'
import { Card } from '../../components/shared/Card'
import { styled } from 'styled-components'

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

const PublicationContentContainer = styled.main`
  padding: 2.5rem 2rem;
`

export function PublicationContentPage() {
  return (
    <ContainerLayout>
      <LayoutAdjustment>
        <Card>
          <CardPublicationContent>
            <header>
              <a href="#">
                <FaChevronLeft />
                <span>VOLTAR</span>
              </a>
              <a href="#">
                <span>VER NO GITHUB</span>
                <FaArrowUpRightFromSquare />
              </a>
            </header>

            <div>
              <h1>Javascript data types and data structures</h1>
              <ul>
                <li>
                  <FaGithub />
                  <span>marcos-roberto-dev</span>
                </li>
                <li>
                  <FaCalendarDay />
                  <span>Há 1 dia</span>
                </li>
                <li>
                  <FaComment />
                  <span>5 comentários</span>
                </li>
              </ul>
            </div>
          </CardPublicationContent>
        </Card>

        <PublicationContentContainer>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn. Dynamic typing JavaScript is a loosely typed and dynamic
          language. Variables in JavaScript are not directly associated with any
          particular value type, and any variable can be assigned (and
          re-assigned) values of all types: let foo = 42; // foo is now a number
          foo = ‘bar’; // foo is now a string foo = true; // foo is now a
          boolean
        </PublicationContentContainer>
      </LayoutAdjustment>
    </ContainerLayout>
  )
}
