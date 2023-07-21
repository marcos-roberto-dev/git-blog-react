import { styled } from 'styled-components'

export const CardPublicationContent = styled.div`
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
