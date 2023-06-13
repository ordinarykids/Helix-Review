import VideoEmbed from '../VideoEmbed'
import type { VideoEmbedField } from '../VideoEmbed/VideoEmbed'
import styles from './PageSection.module.scss'

export interface PageSectionProps {
  title?: string
  innerBlocks: (| VideoEmbedField)[]
}

export default function PageSection({ title, innerBlocks }: PageSectionProps) {
  return (
    <section className={styles.wrap}>
      {title && (
        <div className={styles.titleWrap}>
          <h2 className={styles.title}>
            {title}
          </h2>
        </div>
      )}
      {innerBlocks && innerBlocks.length > 0 && innerBlocks.map((block) => {
        switch (block?._type) {
          case 'videoEmbed':
            return <VideoEmbed key={block._key} {...block} />

          default:
            return null
        }
      })}
    </section>
  )
}
