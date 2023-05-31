'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import cx from 'classnames'
import { MainNavigation } from 'app/(frontend)/lib/sanity/fetch/fetchMainNav'
import StyledLink from '../StyledLink'
import ArrowDropdown from '../svgs/ArrowDropdown'
import styles from './MainNav.module.scss'

type teaserDocTypes = | 'blogPost'

export default function MainNav({ navData }: { navData: MainNavigation }) {
  const pathname = usePathname()
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState<number | null>(null)
  const [hoveredSubmenuIndex, setHoveredSubmenuIndex] = useState<number | null>(null)

  useEffect(() => {
    setOpenSubmenuIndex(null)
  }, [pathname])

  const toggleOpen = (index: number) => {
    setOpenSubmenuIndex((prev) => {
      if (prev === index) {
        return null
      }
      return index
    })
  }

  const docTypes = {
    blogPost: {
      text: 'Blog',
      slug: '/blog',
    },
  }

  return (
    <nav className={styles.nav}>
      {navData && (
        <ul className={styles.navList}>
          {navData?.navigationSections?.map((section, sectionIndex) => {
            const { navigationLinkGroups, teaser, ctaLink } = section.navigationSectionPanel
            return (
              <li key={section._key} className={styles.menuItem}>
                <button
                  className={cx(
                    styles.menuItem_Button,
                    {
                      [styles.menuItem_Button__faded]:
                        ((hoveredSubmenuIndex !== null && hoveredSubmenuIndex !== sectionIndex)
                        || (openSubmenuIndex !== null && openSubmenuIndex !== sectionIndex))
                        && hoveredSubmenuIndex !== sectionIndex && openSubmenuIndex !== sectionIndex,
                    },
                  )}
                  type='button'
                  onClick={() => toggleOpen(sectionIndex)}
                  onMouseEnter={() => setHoveredSubmenuIndex(sectionIndex)}
                  onMouseLeave={() => setHoveredSubmenuIndex(null)}
                >
                  {section.title}
                  <span
                    className={cx(
                      styles.menuItem_ButtonArrow,
                      { [styles.menuItem_ButtonArrow__open]: openSubmenuIndex === sectionIndex },
                    )}
                  >
                    <ArrowDropdown />
                  </span>
                </button>
                <div className={cx(styles.submenu, { [styles.submenu__open]: openSubmenuIndex === sectionIndex })}>
                  <div className={styles.submenuMainContent}>
                    <div
                      className={cx(
                        styles.submenus,
                        { [styles.submenus__oneCol]: navigationLinkGroups.length === 1 },
                        { [styles.submenus__twoCol]: navigationLinkGroups.length === 2 },
                        {
                          [styles.submenus__threeCol]: navigationLinkGroups.length === 3
                            || (
                              navigationLinkGroups.length > 3
                              && teaser
                            ),
                        },
                      )}
                    >
                      {navigationLinkGroups.map((linkGroup) => (
                        <ul key={linkGroup._key} className={styles.linkGroup}>
                          {linkGroup.title && (
                            <li className={styles.linkGroupHeader}>
                              {linkGroup.titlelink ? (
                                <Link
                                  href={`${linkGroup.titlelink.link || linkGroup.titlelink.externalUrl}`}
                                  className={styles.linkGroupHeader_Link}
                                >
                                  {linkGroup.title}
                                </Link>
                              ) : (
                                linkGroup.title
                              )}
                            </li>
                          )}
                          {linkGroup.navigationLinks.map((link) => (
                            <li
                              key={link._key}
                              className={cx(
                                styles.linkGroupItem,
                                { [styles.linkGroupItem__hasHeader]: linkGroup.title },
                              )}
                            >
                              <Link
                                href={`${link.url.link || link.url.externalUrl}`}
                                className={cx(styles.submenuLink, { [styles.submenuLink__hasHeader]: linkGroup.title })}
                              >
                                {link.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ))}
                    </div>
                    {teaser && (
                      <div className={styles.teaser}>
                        {teaser.image?.url && (
                          <div className={styles.teaser_ImageWrap}>
                            <Image
                              className={styles.teaser_Image}
                              src={teaser.image.url}
                              width={teaser.image.width}
                              height={teaser.image.height}
                              alt={teaser.image.altText || `Image for ${teaser.title}`}
                            />
                          </div>
                        )}
                        <div className={styles.teaser_TextWrap}>
                          <p className={styles.teaser_Type}>
                            {`Featured ${docTypes[teaser._type as teaserDocTypes].text}`}
                          </p>
                          <p className={styles.teaser_Excerpt}>
                            {teaser.title}
                          </p>
                          <StyledLink text='Read More' link={`${docTypes[teaser._type as teaserDocTypes].slug}/${teaser.slug}`} linkStyle='carat' />
                        </div>
                      </div>
                    )}
                  </div>
                  {ctaLink?.title && (ctaLink?.url?.link || ctaLink?.url?.externalUrl) && <StyledLink className={styles.ctaLink} text={ctaLink.title} link={`${ctaLink.url.link || ctaLink.url.externalUrl}`} linkStyle='carat' theme='nav' />}
                </div>
              </li>
            )
          })}
        </ul>
      )}
    </nav>
  )
}
