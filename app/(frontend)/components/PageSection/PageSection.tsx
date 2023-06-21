import CardGrid from '../CardGrid'
import type { CardGridField } from '../CardGrid/CardGrid'
import TwoUp from '../TwoUp'
import { TwoUpField } from '../TwoUp/TwoUp'
import VideoEmbed from '../VideoEmbed'
import type { VideoEmbedField } from '../VideoEmbed/VideoEmbed'
import styles from './PageSection.module.scss'

export interface PageSectionProps {
  title?: string
  innerBlocks: (
    | CardGridField
    | TwoUpField
    | VideoEmbedField
  )[]
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
          case 'cardGrid':
            return <CardGrid key={block._key} {...block} />

          case 'twoUp':
            return <TwoUp key={block._key} {...block} />

          case 'videoEmbed':
            return <VideoEmbed key={block._key} {...block} />

          default:
            return null
        }
      })}
    </section>
  )
}
