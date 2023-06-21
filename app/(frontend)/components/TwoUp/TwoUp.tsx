import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'
import type ImageField from 'app/(frontend)/types/image'
import portableTextComponents from 'app/(frontend)/utils/portableTextComponents'
import cx from 'classnames'
import { StyledLinkField } from '../StyledLink/StyledLink'
import styles from './TwoUp.module.scss'

export interface TwoUpProps {
  image?: ImageField
  text?: (PortableTextBlock | StyledLinkField)[]
  imageAlignment: 'left' | 'right'
  imagePaddingOverride?: number
}

export interface TwoUpField extends TwoUpProps {
  _key: string
  _type: 'twoUp'
}

export default function TwoUp({
  image,
  text,
  imageAlignment,
  imagePaddingOverride,
}: TwoUpProps) {
  return (
    <section className={styles.container}>
      {image && (
        <div
          className={cx(styles.imgWrap, styles[`imgWrap__${imageAlignment}`])}
          style={{ padding: imagePaddingOverride !== undefined ? `${imagePaddingOverride}%` : undefined }}
        >
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
      {text && (
        <div className={styles.textWrap}>
          <PortableText value={text} components={portableTextComponents} />
        </div>
      )}
    </section>
  )
}
