import Link from 'next/link'
import classNames from 'classnames'
import ArrowRight from '../svgs/ArrowRight'
import styles from './StyledLink.module.scss'

export interface StyledLinkProps {
  text: string,
  link: string,
  linkStyle?: 'primary' | 'secondary' | 'carat',
  align?: 'left' | 'center',
}

export default function StyledLink({
  text, link, linkStyle = 'primary', align = 'left',
}: StyledLinkProps) {
  const linkClasses = classNames(styles.StyledLink, styles[linkStyle], styles[align])

  return (
    <Link href={link} className={linkClasses}>
      <span className={styles.text}>{text}</span>
      {linkStyle === 'carat'
      && <span><ArrowRight /></span>}
    </Link>
  )
}
