import StyledLink from '../components/StyledLink'
import { StyledLinkField } from '../components/StyledLink/StyledLink'

const portableTextComponents = {
  types: {
    styledLink: ({ value }: { value: StyledLinkField}) => (
      <StyledLink {...value} />
    ),
  },
}

export default portableTextComponents
