import Link from 'next/link'
import classNames from 'classnames'
import ArrowRight from '../svgs/ArrowRight'
import styles from './StyledLink.module.scss'

export interface StyledLinkProps {
  text: string,
  link: string,
  style: 'primary' | 'secondary' | 'carat',
  align: 'left' | 'center',
}

export default function StyledLink({
  text, link, style, align,
}: StyledLinkProps) {
  const linkClasses = classNames(styles.StyledLink, styles[style], styles[align])

  return (
    <Link href={link} className={linkClasses}>
      <span className={styles.text}>{text}</span>
      {style === 'carat'
      && <span><ArrowRight /></span>}
    </Link>
  )
}
