import classNames from 'classnames'
import React from 'react'
import Image, { StaticImageData } from 'next/image'
import StyledLink from '../StyledLink/StyledLink'
// import CardWithImage from '../CardWithImage/CardWithImage'
import styles from './PageHero.module.scss'

// interface CardWithImageProps {
//   title: string,
//   src: StaticImageData,
//   width: number,
//   height: number,
//   alt: string,
// }

const StyledLinkComponent = () => (
  <StyledLink
    text='Contact Us'
    link=''
    linkStyle='primary'
    align='left'
  />
)

interface PageHeroProps {
  header: string,
  subheader: string,
  src: StaticImageData,
  width: number,
  height: number,
  alt: string,
  media: string,
  // cardWithImageProps: CardWithImageProps,
}

export default function PageHero({
  header, subheader, src, width, height, alt, media,
}: PageHeroProps) {
  const containerClasses = classNames(styles.container)

  return (
    <div className={containerClasses}>
      <div className={classNames(styles.hero)}>
        <div className={classNames(styles.heroLeft)}>
          <h2 className={classNames(styles.heroHeader)}>{header}</h2>
          <p className={classNames(styles.heroSubheader)}>{subheader}</p>
          <div className={classNames(styles.link)}>
            <StyledLinkComponent />
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
      <div className={classNames(styles.subsection)}>
        {/* <CardWithImage title='foo' src={[]} height={100} width={100} /> */}
      </div>
    </div>
  )
}
