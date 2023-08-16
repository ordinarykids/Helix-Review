import cx from 'classnames'
import StyledLink from '../components/StyledLink'
import { StyledLinkField } from '../components/StyledLink/StyledLink'
import styles from './portableTextComponents.module.scss'

type TypeTheme = 'dark' | 'light'

const portableTextComponents = (theme: TypeTheme = 'dark') => (
  {
    types: {
      styledLink: ({ value }: { value: StyledLinkField}) => (
        <div className={cx(styles.styledLink, 'styledLink')}>
          <StyledLink {...value} theme={theme} />
        </div>
      ),
    },
  }
)

export default portableTextComponents
