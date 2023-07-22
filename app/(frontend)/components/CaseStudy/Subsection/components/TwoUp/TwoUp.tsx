import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import RichTextType from 'app/(frontend)/types/richText'
import ImageField from 'app/(frontend)/types/image'
import portableTextComponents from 'app/(frontend)/utils/portableTextComponents'
import Icon from 'app/(frontend)/components/Icon'
import type { IconType, IconColor } from 'app/(frontend)/components/Icon/Icon'
import cx from 'classnames'
import styles from './TwoUp.module.scss'

export interface TwoUpProps {
  image?: ImageField
  iconCard?: {
    rows?: {
      text?: string
      icon?: IconType
      iconColor: IconColor
    }[]
  }
  title?: string
  text?: RichTextType
  imageAlignment: 'left' | 'right'
}

export interface TwoUpField extends TwoUpProps {
  _key: string
  _type: 'caseStudyTwoUp'
}

export default function TwoUp({
  image,
  iconCard,
  title,
  text,
  imageAlignment,
}: TwoUpProps) {
  return (
    <section className={styles.container}>
      {(text || title) && (
        <div className={cx(styles.textWrap, styles[`textWrap__img${imageAlignment}`])}>
          {title && <h1 className={styles.title}>{title}</h1>}
          {text && (
            <div className={styles.text}>
              <PortableText value={text} components={portableTextComponents()} />
            </div>
          )}
        </div>
      )}
      {(image || iconCard) && (
        <div className={cx(styles.visuals, styles[`visuals__${imageAlignment}`])}>
          {image && (
            <div className={styles.imgWrap}>
              <Image
                className={styles.img}
                src={image.url}
                width={image.width}
                height={image.height}
                alt={image.altText ?? ''}
                title={image.title ?? undefined}
              />
            </div>
          )}
          {iconCard && (
            <div className={styles.iconCard}>
              {iconCard.rows?.map((row) => {
                const { text: iconRowText, icon, iconColor } = row
                return (
                  <div className={styles.iconCard_Row}>
                    {icon && (
                      <div className={styles.iconCard_Icon}>
                        <Icon icon={icon} color={iconColor} />
                      </div>
                    )}
                    {iconRowText && <p className={styles.iconCard_Text}>{iconRowText}</p>}
                  </div>
                )
              })}
            </div>
          )}
        </div>
      )}
    </section>
  )
}
