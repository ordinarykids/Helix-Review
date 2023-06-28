import cx from 'classnames'
import AccordionItem, { AccordianItemField } from './AccordionItem/AccordionItem'
import styles from './Accordion.module.scss'

export interface AccordionProps {
  header?: string
  items: AccordianItemField[]
}

export interface AccordionField extends AccordionProps {
  _key: string
  _type: 'accordion'
}

export default function Accordion({
  header,
  items,
}: AccordionProps) {
  const itemsCount = items.length
  console.log(items[0].text[2].children)
  return (
    <section className={styles.wrap}>
      <div className={styles.container}>
        {header && (
          <h2
            className={cx(
              styles.title,
              {
                [styles.title__xshort]: itemsCount === 1,
                [styles.title__short]: itemsCount === 2,
              },
            )}
          >
            {header}
          </h2>
        )}
        <div className={styles.items}>
          {items.map((item, index) => <AccordionItem {...item} index={index} />)}
        </div>
      </div>
    </section>
  )
}
