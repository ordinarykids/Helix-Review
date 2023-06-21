import cx from 'classnames'
import styles from './PartnerLogoGrid.module.scss'

export interface PartnerLogoGridProps {
  header: string,
  subheader: string,
}

export default function PartnerLogoGrid(props: PartnerLogoGridProps) {
  const { header, subheader } = props

  return (
    <section className={cx(styles.wrap)}>
      <div className={cx(styles.container)}>
        {header && (
          <h1 className={(cx(styles.header))}>{header}</h1>
        )}
        {subheader && (
          <p className={(cx(styles.subheader))}>{subheader}</p>
        )}
        <div className={cx(styles.logoGrid)}>
          logos here
        </div>
      </div>
    </section>
  )
}
