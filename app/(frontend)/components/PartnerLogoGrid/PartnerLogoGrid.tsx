import cx from 'classnames'
import styles from './PartnerLogoGrid.module.scss'

interface PartnerLogoGridProps {
  header: string,
  subheader: string,
}

export default function PartnerLogoGrid(props: PartnerLogoGridProps) {
  const { header, subheader } = props

  return (
    <section className={cx(styles.wrap)}>
      <div className={cx(styles.container)}>
        <h1>{header}</h1>
        <p>{subheader}</p>
        <div className={cx(styles.logoGrid)}>
          logos here
        </div>
      </div>
    </section>
  )
}
