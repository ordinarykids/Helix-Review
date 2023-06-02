import Link from 'next/link'
import cx from 'classnames'
import ArrowRight from '../svgs/ArrowRight'
import styles from './StyledLink.module.scss'

interface StyledLinkProps {
  text: string,
  link: string,
  linkStyle?: 'primary' | 'secondary' | 'carat',
  align?: 'left' | 'center',
  theme?: 'dark' | 'light' | 'nav'
  className?: string
}

export default function StyledLink({
  text, link, linkStyle = 'primary', align = 'left', theme = 'dark', className,
}: StyledLinkProps) {
  const linkClasses = cx(styles.StyledLink, styles[linkStyle], styles[align], styles[theme])

  return (
    <Link href={link} className={cx(linkClasses, className)}>
      <span className={styles.text}>{text}</span>
      {linkStyle === 'carat'
      && <ArrowRight />}
    </Link>
  )
}