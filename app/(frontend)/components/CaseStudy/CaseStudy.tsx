'use client'

import { useEffect, useRef, useState } from 'react'
import cx from 'classnames'
import Subsection, { SubsectionField } from './Subsection/Subsection'
import Button from '../Button'
import styles from './CaseStudy.module.scss'

export interface CaseStudySection {
  _key: string
  eyebrow: string
  header?: string | null
  subsections?: SubsectionField[]
}

export interface CaseStudyProps {
  fileDownload?: {
    extension: string
    url: string
  } | null
  sections: CaseStudySection[]
}

export interface CaseStudyField extends CaseStudyProps {
  _key: string
  _type: 'caseStudy'
}

const slugify = (string: string) => (
  string.toLowerCase()
    .replace(/\s+/g, '-') // slugify the title using a simple regex
    .slice(0, 200)
)

export default function CaseStudy({ fileDownload, sections }: CaseStudyField) {
  const navRef = useRef<HTMLDivElement>(null)
  /* eslint-disable-next-line */
  const [activeNavItemIndex, setActiveNavItemIndex] = useState(0)

  const [headerHeight, setHeaderHeight] = useState(112)

  useEffect(() => {
    function getHeaderheight() {
      const currentHeaderHeight = navRef.current?.offsetHeight
      if (currentHeaderHeight) {
        setHeaderHeight(currentHeaderHeight)
      }
    }
    window.addEventListener('resize', getHeaderheight)
    getHeaderheight()
    return () => window.removeEventListener('resize', getHeaderheight)
  }, [])

  return (
    <article className={styles.wrap}>
      <div className={styles.navWrap} ref={navRef}>
        <div className={styles.navContainer}>
          <div className={styles.navInner}>
            <nav className={styles.nav}>
              {sections.map((section, index) => (
                <a
                  href={`#${slugify(section.eyebrow)}`}
                  className={cx(styles.nav_Item, { [styles.nav_Item__active]: index === activeNavItemIndex })}
                  key={section._key}
                >
                  {section.eyebrow}
                </a>
              ))}
            </nav>
            {fileDownload && (
              <Button
                className={styles.nav_Button}
                text={`Download ${fileDownload.extension.toUpperCase()}`}
                shortText={fileDownload.extension.toUpperCase()}
                link={`${fileDownload.url}?dl=`}
                download
                buttonStyle='outline'
              />
            )}
          </div>
        </div>
      </div>
      <div className={styles.sections}>
        {sections.map((section) => {
          const {
            _key,
            eyebrow,
            header,
            subsections,
          } = section
          return (
            <section
              key={_key}
              id={slugify(eyebrow)}
              className={styles.section}
              style={{ scrollMarginTop: headerHeight }}
            >
              <div className={styles.section_Intro}>
                <h3 className={styles.section_Eyebrow}>{eyebrow}</h3>
                <h2 className={styles.section_Header}>{header}</h2>
              </div>
              {subsections && (
                <div className={styles.subsections}>
                  {subsections.map((subsection) => <Subsection {...subsection} key={subsection._key} />)}
                </div>
              )}
            </section>
          )
        })}
      </div>
    </article>
  )
}
