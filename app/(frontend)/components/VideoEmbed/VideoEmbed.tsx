'use client'

import dynamic from 'next/dynamic'

import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'
import cx from 'classnames'
import portableTextComponents from 'app/(frontend)/utils/portableTextComponents'
import shapesColoredDots from 'public/shapes_colored_dots.svg'
import styles from './VideoEmbed.module.scss'

// Dependency relies on window. This fixes a hydration error
// Use react-player/lazy to support more than just wistia
const ReactPlayer = dynamic(() => import('react-player/wistia'), {
  ssr: false,
})

interface VideoEmbedProps {
  eyebrow?: string | null
  header?: string | null
  url: string
  text?: PortableTextBlock[]
  styleAsCard: boolean
}

export interface VideoEmbedField extends VideoEmbedProps {
  _key: string
  _type: 'videoEmbed'
}

export default function VideoEmbed({
  eyebrow,
  header,
  url,
  text,
  styleAsCard,
}: VideoEmbedProps) {
  return (
    <section className={cx(styles.wrap, { [styles.wrap__morePadding]: !text })}>
      <div className={styles.wrapInner}>
        <div className={styles.bgWrap}>
          <div className={styles.bgContainer}>
            <Image src={shapesColoredDots} className={styles.shapesColoredDots} width={1364} height={641} alt='' />
          </div>
        </div>
        <div className={styles.fgWrap}>
          <div className={styles.container}>
            <div className={styles.intro}>
              {eyebrow && (
                <p className={styles.eyebrow}>
                  {eyebrow}
                </p>
              )}
              {header && (
                <h2 className={styles.title}>
                  {header}
                </h2>
              )}
            </div>
            <div className={cx(styles.content, { [styles.content__card]: styleAsCard })}>
              <div className={cx(styles.videoWrap, { [styles.videoWrap__shadow]: !styleAsCard })}>
                <ReactPlayer
                  url={url}
                  className={styles.videoPlayer}
                  width='100%'
                  height='100%'
                  controls
                />
              </div>
              {text && (
                <div
                  className={cx(
                    styles.text,
                    {
                      [styles.text__centered]: !styleAsCard,
                      [styles.text__card]: styleAsCard,
                    },
                  )}
                >
                  <PortableText value={text} components={portableTextComponents()} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
