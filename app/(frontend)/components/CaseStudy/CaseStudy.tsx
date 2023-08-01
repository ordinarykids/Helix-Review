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
  const caseStudyRef = useRef<HTMLElement | null>(null)
  const navRef = useRef<HTMLDivElement | null>(null)
  const [activeNavItemIndex, setActiveNavItemIndex] = useState(0)

  const [caseStudyNavHeight, setCaseStudyNavHeight] = useState(112)

  // Get header height and refresh on resize
  useEffect(() => {
    function getHeaderheight() {
      const currentHeaderHeight = navRef?.current?.offsetHeight
      if (currentHeaderHeight) {
        setCaseStudyNavHeight(currentHeaderHeight)
      }
    }
    window.addEventListener('resize', getHeaderheight)
    getHeaderheight()

    return () => window.removeEventListener('resize', getHeaderheight)
  }, [])

  // Use intersection observer for sections to add active class to nav item
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target instanceof HTMLElement) {
            const entryIndex = entry.target.dataset.sectionIndex
            if (entryIndex) {
              setActiveNavItemIndex(Number(entryIndex))
            }
          }
        }
      })
    }, {
      rootMargin: '-50% 0px',
    })

    const sectionList = caseStudyRef?.current?.querySelectorAll('.caseStudy_Section')
    if (sectionList) {
      sectionList.forEach((el) => {
        observer.observe(el)
      })
    }

    return () => {
      if (sectionList) {
        sectionList.forEach((el) => {
          observer.unobserve(el)
        })
      }
    }
  }, [])

  return (
    <article className={styles.wrap} ref={caseStudyRef}>
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
        {sections.map((section, index) => {
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
              data-section-index={index}
              className={cx(styles.section, 'caseStudy_Section')}
              style={{ scrollMarginTop: caseStudyNavHeight }}
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
