'use client'

import { useState } from 'react'
import cx from 'classnames'
import { PortableText } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'
import styles from './AccordionItem.module.scss'

export interface AccordionItemProps {
  title: string
  text: PortableTextBlock[]
}

export interface AccordianItemField extends AccordionItemProps {
  _key: string
  _type: 'item'
}

function convertToSlug(text: string) {
  return text.toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
}

export default function AccordionItem({ title, text }: AccordionItemProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const slugifiedTitle = convertToSlug(title)

  return (
    <div className={styles.item}>
      <h3 className={styles.title}>
        <button
          type='button'
          className={styles.titleButton}
          id={`header-${slugifiedTitle}`}
          aria-controls={`panel-${slugifiedTitle}`}
          aria-expanded={isExpanded}
          onClick={() => setIsExpanded((prevState) => !prevState)}
        >
          {title}
          <div className={cx(styles.plusMinus, { [styles.plusMinus__open]: isExpanded })}>
            <span className={styles.plusMinus__h} />
            <span className={styles.plusMinus__v} />
          </div>
        </button>
      </h3>
      <section
        className={styles.text}
        id={`panel-${slugifiedTitle}`}
        aria-labelledby={`header-${slugifiedTitle}`}
        hidden={!isExpanded}
      >
        <PortableText value={text} />
      </section>
    </div>
  )
}
