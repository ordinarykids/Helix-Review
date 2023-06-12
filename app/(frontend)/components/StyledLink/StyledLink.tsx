import Link from 'next/link'
import cx from 'classnames'
import ArrowRight from '../svgs/ArrowRight'
import styles from './StyledLink.module.scss'

export interface StyledLinkProps {
  text: string,
  link: string,
  linkStyle?: 'button' | 'carat',
  size?: 'large' | 'small',
  align?: 'left' | 'center',
  theme?: 'dark' | 'light',
  className?: string
}

export default function StyledLink({
  text, link, className, linkStyle = 'button', size = 'large', align = 'left', theme = 'dark',
}: StyledLinkProps) {
  const linkClasses = cx(styles.StyledLink, styles[linkStyle], styles[size], styles[align], styles[theme])

  return (
    <Link href={link} className={cx(linkClasses, className)}>
      <span className={styles.text}>{text}</span>
      {linkStyle === 'carat'
      && <ArrowRight />}
    </Link>
  )
}
