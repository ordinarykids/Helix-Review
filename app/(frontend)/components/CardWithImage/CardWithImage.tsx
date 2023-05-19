import Image, { StaticImageData } from 'next/image'
import classNames from 'classnames'
import styles from './CardWithImage.module.scss'

interface CardWithImageProps {
  title: string,
  src: StaticImageData,
  width: number,
  height: number,
  alt: string,
}

export default function CardWithImage({
  title, src, width, height, alt,
}: CardWithImageProps) {
  const containerClasses = classNames(styles.wrap)

  return (
    <div className={containerClasses}>
      <Image
        className={classNames(styles.image)}
        src={src}
        width={width}
        height={height}
        alt={alt}
        // fill
        // style={{ objectFit: 'contain' }}
      />
      <h2 className={styles.title}>{title}</h2>
      StyledLink here
    </div>
  )
}
