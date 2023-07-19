import { styled } from 'styled-components'

export const CardProfileContainer = styled.section`
  display: flex;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  & > div {
    border-radius: 10px;
    padding: 2rem;
    background: ${(props) => props.theme['base-profile']};
    display: flex;
    gap: 2rem;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;

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
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
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
  }
`
