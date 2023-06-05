import cx from 'classnames'
import React from 'react'
import Image, { StaticImageData } from 'next/image'
import StyledLink from '../StyledLink/StyledLink'
import styles from './PageHero.module.scss'

interface PageHeroProps {
  header: string,
  subheader: string,
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
  const containerClasses = cx(styles.container)

  return (
    <div className={cx(styles.wrap)}>
      <div className={containerClasses}>
        <div className={cx(styles.heroLeft)}>
          <h2 className={cx(styles.heroHeader)}>{header}</h2>
          <p className={cx(styles.heroSubheader)}>{subheader}</p>
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
