'use client'

import { useEffect, useState } from 'react'
// import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import cx from 'classnames'
import styles from './MainNav.module.scss'

export default function MainNav({ navData }: { navData: Sanity.Default.Query.MainNavigation }) {
  const pathname = usePathname()
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState<number | null>(null)

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

  return (
    <nav className={styles.nav}>
      {navData && (
        <ul className={styles.navList}>
          {navData?.navigationSections?.map((section, sectionIndex) => (
            <li className={styles.menuItem}>
              <button className={styles.menuItem_Button} type='button' onClick={() => toggleOpen(sectionIndex)}>
                {section.title}
              </button>
              <ul className={cx(styles.submenu, { [styles.submenu__open]: openSubmenuIndex === sectionIndex })}>
                {section.navigationSectionPanel.columns.map((column) => (
                  <li className={styles.column}>
                    {column.navigationLinkGroups.map((linkGroup) => (
                      <ul className={styles.linkGroup}>
                        {linkGroup.title && (
                          <li className={styles.linkGroupHeader}>
                            {linkGroup.title}
                          </li>
                        )}
                        {linkGroup.navigationLinks.map((link) => (
                          <li>
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
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
