import cx from 'classnames'
import React from 'react'
import Image, { ImageProps } from 'next/image'
import type { PortableTextBlock } from '@portabletext/types'
import { PortableText } from '@portabletext/react'
import type { StyledLinkProps } from '@/app/(frontend)/components/StyledLink/StyledLink'
import StyledLink from '../StyledLink/StyledLink'
import styles from './PageHero.module.scss'

export type PageHeroType = {
  title?: string | null,
  pageHero?: {
    header?: string | null,
    subheader?: PortableTextBlock | null,
    media?: string | null,
    button: StyledLinkProps | null,
    image: ImageProps | null,
  } | null,
}

export default function PageHero({ pageHero }: NonNullable<PageHeroType>) {
  if (!pageHero) {
    return null
  }
  const {
    header, subheader, media, button, image,
  } = pageHero

  return (
    <div className={cx(styles.wrap)}>
      <div className={cx(styles.container)}>
        <div className={cx(styles.heroLeft)}>
          <h1 className={cx(styles.heroHeader)}>{header}</h1>
          <div className={cx(styles.heroSubheader)}>
            <PortableText value={subheader as PortableTextBlock} />
          </div>
          {button && (
            <div className={cx(styles.link)}>
              <StyledLink
                text={button.text}
                link={button.link}
                linkStyle={button.linkStyle}
                size='large'
                align={button.align}
                theme='dark'
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
