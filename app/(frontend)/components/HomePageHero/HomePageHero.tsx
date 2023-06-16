import cx from 'classnames'
import React from 'react'
import Image, { ImageProps } from 'next/image'
import type { PortableTextBlock } from '@portabletext/types'
import { PortableText } from '@portabletext/react'
import Button from '../Button/Button'
import styles from './HomePageHero.module.scss'

export type HomePageHeroType = {
    header?: string | null,
    subheader?: PortableTextBlock[],
    media?: string | null,
    buttonText?: string | null,
    buttonLink?: {
      link: string | null,
      externalUrl: string | null,
      },
    image?: ImageProps | null,
  }

export default function HomePageHero({
  header, subheader, media, buttonText, buttonLink, image,
}: HomePageHeroType) {
  return (
    <div className={cx(styles.wrap)}>
      <div className={cx(styles.container)}>
        <div className={cx(styles.heroLeft)}>
          {header && <h1 className={cx(styles.heroHeader)}>{header}</h1>}
          {subheader && (
            <div className={cx(styles.heroSubheader)}>
              <PortableText value={subheader} />
            </div>
          )}
          {(buttonText && buttonLink) && (
            <div className={cx(styles.link)}>
              <Button
                text={buttonText}
                link={`${buttonLink.link || buttonLink.externalUrl}`}
              />
            </div>
          )}
        </div>
        <div className={cx(styles.heroRight)}>
          {media
            ? (
              <div className={cx(styles.heroAnimation)}>
                <h2>FPO animation</h2>
              </div>
            )
            : image && (
              <div className={cx(styles.heroImage)}>
                <Image
                  className={cx(styles.image)}
                  src={image.src}
                  width={image.width}
                  height={image.height}
                  alt={image.alt}
                />
              </div>
            )}
        </div>
      </div>
    </div>
  )
}
