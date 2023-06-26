import Link from 'next/link'
import cx from 'classnames'
import ArrowRight from '../svgs/ArrowRight'
import styles from './StyledLink.module.scss'

export interface StyledLinkProps {
  text: string,
  link: string,
  className?: string,
  align?: 'left' | 'center',
}

export interface StyledLinkField extends StyledLinkProps {
  _key: string
  _type: 'styledLink'
}

export default function StyledLink({
  text, link, className, align = 'left',
}: StyledLinkProps) {
  const linkClasses = cx(styles.StyledLink, styles[align])

  return (
    <Link href={link} className={cx(linkClasses, className)}>
      <span className={styles.text}>{text}</span>
      <ArrowRight />
    </Link>
  )
}
