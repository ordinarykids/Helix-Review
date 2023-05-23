import Link from 'next/link'
import classNames from 'classnames'
import ArrowRight from '../svgs/ArrowRight'
import styles from './StyledLink.module.scss'

interface StyledLinkProps {
  text: string,
  link: string,
  style: string,
  align: string,
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
