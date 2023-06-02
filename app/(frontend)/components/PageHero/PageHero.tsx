import classNames from 'classnames'
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
  const containerClasses = classNames(styles.container)

  return (
    <div className={classNames(styles.wrap)}>
      <div className={containerClasses}>
        <div className={classNames(styles.heroLeft)}>
          <h2 className={classNames(styles.heroHeader)}>{header}</h2>
          <p className={classNames(styles.heroSubheader)}>{subheader}</p>
          <div className={classNames(styles.link)}>
            <StyledLink
              text={buttonText}
              link={buttonLink}
            />
          </div>
        </div>
        <div className={classNames(styles.heroRight)}>
          {media
            ? (
              <div className={classNames(styles.heroAnimation)}>
                <h2>FPO animation</h2>
              </div>
            )
            : (
              <div className={classNames(styles.heroImage)}>
                <Image
                  className={classNames(styles.image)}
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
