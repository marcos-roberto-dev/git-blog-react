import { styled } from 'styled-components'

export const PublicationCardContainer = styled.article`
  padding: 2rem;
  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  max-height: 206px;
  height: 100%;
  border: 1px solid transparent;

  header {
    display: flex;
    justify-content: space-between;

    h1 {
      color: ${(props) => props.theme['base-title']};
      font-size: 1.25rem;
      line-height: 1.6;
    }

    time {
      white-space: nowrap;
      font-size: 0.875rem;
      line-height: 2;
      color: ${(props) => props.theme['base-span']};
    }
  }

  p {
    margin-top: 0.5rem;
    line-height: 1.6;
  }

  &:hover {
    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-border']};
    transition: background 0.2s;
  }
`
