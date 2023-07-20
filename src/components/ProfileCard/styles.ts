import { styled } from 'styled-components'

export const ProfileCardContainer = styled.section`
  display: flex;
  gap: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-size: 1.5rem;
      line-height: 1.3;
      color: ${(props) => props.theme['base-title']};
    }

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      color: ${(props) => props.theme.blue};

      svg {
        width: 12px;
      }
    }
  }

  img {
    border-radius: 8px;
    max-width: 9.25rem;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
      display: block;
      line-height: 1.6;
      margin-top: 0.5rem;
    }
  }

  ul {
    display: flex;
    gap: 1.5rem;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${(props) => props.theme['base-subtitle']};
      line-height: 1.6;
      text-decoration: none;
    }

    svg {
      width: 24px;
      fill: ${(props) => props.theme['base-label']};
    }
  }
`
