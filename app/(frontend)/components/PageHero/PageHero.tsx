import cx from 'classnames'
import React from 'react'
import Image, { StaticImageData } from 'next/image'
import type { PortableTextBlock } from '@portabletext/types'
import { PortableText } from '@portabletext/react'
import StyledLink from '../StyledLink/StyledLink'
import styles from './PageHero.module.scss'

interface PageHeroProps {
  header: string,
  subheader: PortableTextBlock[],
  src: StaticImageData,
  width: number,
  height: number,
  alt: string,
  media: string,
  buttonText: string,
  buttonLink: string,
}

export default function PageHero({
  header, subheader, src, width, height, alt, media, buttonText, buttonLink,
}: PageHeroProps) {
  return (
    <div className={cx(styles.wrap)}>
      <div className={cx(styles.container)}>
        <div className={cx(styles.heroLeft)}>
          <h1 className={cx(styles.heroHeader)}>{header}</h1>
          <div className={cx(styles.heroSubheader)}>
            <PortableText value={subheader} />
          </div>
          <div className={cx(styles.link)}>
            <StyledLink
              text={buttonText}
              link={buttonLink}
            />
          </div>
        </div>
        <div className={cx(styles.heroRight)}>
          {media
            ? (
              <div className={cx(styles.heroAnimation)}>
                <h2>FPO animation</h2>
              </div>
            )
            : (
              <div className={cx(styles.heroImage)}>
                <Image
                  className={cx(styles.image)}
                  src={src}
                  width={width}
                  height={height}
                  alt={alt}
                />
              </div>
            )}
        </div>
      </div>
    </div>
  )
}
