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
  logos?: {
    image: NonNullable<ImageField>
    externalUrl?: string
  }[]
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
  logos,
  title,
  text,
  imageAlignment,
}: TwoUpProps) {
  return (
    <section className={styles.container}>
      {(text || title || logos) && (
        <div className={cx(styles.textWrap, styles[`textWrap__img${imageAlignment}`])}>
          {logos && (
            <div className={styles.logos}>
              {logos.map((logo) => {
                const { image: logoImage, externalUrl } = logo
                const logoImageEl = (
                  <Image
                    className={styles.logo}
                    src={logoImage.url}
                    width={logoImage.width}
                    height={logoImage.height}
                    alt={logoImage.altText ?? ''}
                    title={logoImage.title ?? undefined}
                  />
                )
                return (
                  <div className={styles.logoWrap}>
                    {externalUrl ? (
                      <a href={externalUrl} className={styles.logoInner}>
                        {logoImageEl}
                      </a>
                    ) : (
                      <div className={styles.logoInner}>
                        {logoImageEl}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          )}
          {(text || title) && (
            <div className={styles.titleTextWrap}>
              {title && <h1 className={styles.title}>{title}</h1>}
              {text && (
                <div className={styles.text}>
                  <PortableText value={text} components={portableTextComponents()} />
                </div>
              )}
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
