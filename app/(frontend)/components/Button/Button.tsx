import Link from 'next/link'
import cx from 'classnames'
import Download from '../svgs/Download'
import styles from './Button.module.scss'

export type ButtonProps = {
  text: string,
  link: string,
  className?: string,
  download?: boolean
  shortText?: string
  buttonStyle?: 'solid' | 'outline',
  size?: 'large' | 'small',
  theme?: 'dark' | 'light',
  align?: 'center' | 'left',
}

export default function Button({
  text, link, className, download, shortText, buttonStyle = 'solid', size = 'large', align = 'left', theme = 'dark',
}: ButtonProps) {
  const linkClasses = cx(
    styles.Button,
    styles[buttonStyle],
    styles[size],
    styles[align],
    styles[theme],
    { [styles.Button__download]: download },
  )

  return (
    <Link href={link} className={cx(linkClasses, className)}>
      {download && (
        <Download />
      )}
      <span className={cx(styles.text, { [styles.text__long]: shortText })}>{text}</span>
      {shortText && (
        <span className={cx(styles.text, styles.text__short)}>{shortText}</span>
      )}
    </Link>
  )
}
