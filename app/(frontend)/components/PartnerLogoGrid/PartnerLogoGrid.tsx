import cx from 'classnames'
import type ImageField from 'app/(frontend)/types/image'
import styles from './PartnerLogoGrid.module.scss'

export interface PartnerLogoGridProps {
  header?: string,
  subheader?: string,
  logos?: {
    image: ImageField,
    external?: string | null,
    fileUrl?: string | null,
  }[]
}

export default function PartnerLogoGrid({ header, subheader, logos }: PartnerLogoGridProps) {
  return (
    <section className={cx(styles.wrap)}>
      <div className={cx(styles.container)}>
        {header && (
          <h1 className={(cx(styles.header))}>{header}</h1>
        )}
        {subheader && (
          <p className={(cx(styles.subheader))}>{subheader}</p>
        )}
        {logos && logos.map((logo) => {
          const {
            // image,
            external,
            fileUrl,
          } = logo
          return (
            <div className={cx(styles.logoGrid)}>
              {external}
              {fileUrl}
            </div>
          )
        })}
      </div>
    </section>
  )
}
