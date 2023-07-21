import { styled } from 'styled-components'

export const PublicationContentContainer = styled.main`
  padding: 2.5rem 2rem;
  line-height: 1.6;

  p + * {
    margin-top: 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${(props) => props.theme.blue};
  }

  :not(h1) ~ h1,
  :not(h2) ~ h2,
  :not(h3) ~ h3,
  :not(h4) ~ h4,
  :not(h5) ~ h5,
  :not(h6) ~ h6 {
    margin-top: 2rem;
  }

  * ~ pre {
    margin-top: 2rem;
  }

  * ~ ul,
  * ~ ol {
    margin-top: 2rem;
  }

  ul,
  ol {
    padding-left: 1rem;
  }

  img {
    max-width: 50rem;
  }

  table {
    border-collapse: collapse;
    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 8px;

    th {
      border: 1px solid ${(props) => props.theme['base-border']};
      padding: 8px;
      text-align: center;
    }

    td {
      border: 1px solid ${(props) => props.theme['base-border']};
      padding: 8px;
      text-align: center;
      color: ${(props) => props.theme['base-span']};
    }
  }

  ul.contains-task-list {
    list-style: none;
    font-size: 1rem;
    color: ${(props) => props.theme['base-span']};
    padding: 0;
    margin: 0;

    li {
      display: flex;
      align-items: center;
      gap: 1.25rem;

      & + li {
        margin-top: 0.5rem;
      }
    }

    input[type='checkbox'] {
      position: relative;

      &:checked::after {
        content: '\\2714';
        color: ${(props) => props.theme['base-span']};
      }

      &::after {
        content: '';
        text-align: center;
        font-weight: bold;
        width: 24px;
        height: 24px;
        display: block;
        position: absolute;
        top: -6px;
        border-radius: 4px;
        background: ${(props) => props.theme['base-label']};
      }
    }
  }
`
