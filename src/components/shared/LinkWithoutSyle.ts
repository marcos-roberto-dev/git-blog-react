import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export const LinkWithoutStyle = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme['base-text']};
`
