import { styled } from 'styled-components'

export const PublicationsFormContainer = styled.div`
  margin-top: 4.6rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      color: ${(props) => props.theme['base-span']};
      font-size: 0.85rem;
      line-height: 1.6;
    }
  }

  form {
    margin-top: 0.75rem;

    input {
      padding: 0.75rem 1rem;
      border-radius: 6px;
      background: ${(props) => props.theme['base-input']};
      border: 1px solid ${(props) => props.theme['base-border']};
      width: 100%;
      color: ${(props) => props.theme['base-subtitle']};
      line-height: 1.6;

      &::placeholder {
        color: ${(props) => props.theme['base-label']};
      }
    }
  }
`
