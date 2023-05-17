import Link from 'next/link'
import classNames from 'classnames'
import styles from './StyledLink.module.scss'

export default function StyledLink({ text, link }: Sanity.Default.Schema.StyledLink) {
  const containerClasses = classNames(styles.container, styles.someOtherClass)

  return (
    <Link href={link} className={containerClasses}>
      {text}
    </Link>
  )
}
