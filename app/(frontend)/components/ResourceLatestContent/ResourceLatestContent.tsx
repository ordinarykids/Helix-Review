import cx from 'classnames'
import LatestContentSection, { ILatestContentSection } from './components/LatestContentSection/LatestContentSection'
import styles from './ResourceLatestContent.module.scss'

interface ResourceLatestContentProps {
  header?: string
  sections: ILatestContentSection[]
}

export interface ResourceLatestContentField extends ResourceLatestContentProps {
  _key: string
  _type: 'resourceLatestContent'
}

export default function ResourceLatestContent({ header, sections }: ResourceLatestContentProps) {
  return (
    <section className={styles.wrap}>
      <div className={styles.stickyNav}>
        <div className={cx(styles.stickyNavContainer)}>
          {header && <h2 className={styles.header}>{header}</h2>}
        </div>
      </div>
      {sections?.length > 0 && (
        <div className={styles.sections}>
          {sections.map((section) => {
            const { _key, ...rest } = section
            /* @ts-expect-error Async Server Component */
            return <LatestContentSection key={section._key} {...rest} />
          })}
        </div>
      )}
    </section>
  )
}
