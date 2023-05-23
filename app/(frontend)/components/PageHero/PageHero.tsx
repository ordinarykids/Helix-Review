import classNames from 'classnames'
import Image, { StaticImageData } from 'next/image'
// import CardWithImage from '../CardWithImage/CardWithImage'
import styles from './PageHero.module.scss'

// interface CardWithImageProps {
//   title: string,
//   src: StaticImageData,
//   width: number,
//   height: number,
//   alt: string,
// }

interface PageHeroProps {
  header: string,
  subheader: string,
  src: StaticImageData,
  width: number,
  height: number,
  alt: string,
  animation: string,
  // cardWithImageProps: CardWithImageProps,
}

export default function PageHero({
  header, subheader, src, width, height, alt, animation,
}: PageHeroProps) {
  const containerClasses = classNames(styles.container)

  return (
    <div className={containerClasses}>
      <div className={classNames(styles.hero)}>
        <div className={classNames(styles.heroLeft)}>
          <h2 className={classNames(styles.heroHeader)}>{header}</h2>
          <p className={classNames(styles.heroSubheader)}>{subheader}</p>
          {/* StyledLink component */}
        </div>
        <div className={classNames(styles.heroRight)}>
          {animation
            ? (
              <h2>FPO animation</h2>
            )
            : (
              <Image
                className={classNames(styles.image)}
                src={src}
                width={width}
                height={height}
                alt={alt}
              // fill
              // style={{ objectFit: 'contain' }}
              />
            )}
        </div>
      </div>
      <div className={classNames(styles.subsection)}>
        {/* <CardWithImage title='foo' src={[]} height={100} width={100} /> */}
      </div>
    </div>
  )
}
