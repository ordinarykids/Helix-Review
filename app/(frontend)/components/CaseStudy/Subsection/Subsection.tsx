import type { IconColor } from '../../Icon/Icon'
import styles from './Subsection.module.scss'

export interface SubsectionProps {
  eyebrow?: string
  iconColor: IconColor
}

export interface SubsectionField extends SubsectionProps {
  _key: string
  _type: 'subsection'
}

export default function Subsection({ eyebrow, iconColor }: SubsectionProps) {
  return (
    <section className={styles.subsection}>
      <div className={styles.container}>
        <div className={styles.subsectionInner}>
          {eyebrow && (
            <div className={styles.eyebrow}>
              <div className={styles.eyebrow_Decorator} style={{ backgroundColor: iconColor }} />
              <h4 className={styles.eyebrow_Text}>
                {eyebrow}
              </h4>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
