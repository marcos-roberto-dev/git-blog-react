import { styled } from 'styled-components'

export const CardContainer = styled.section`
  display: flex;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  & > div {
    border-radius: 10px;
    padding: 2rem;
    background: ${(props) => props.theme['base-profile']};
    display: flex;
    gap: 2rem;
  }
`
