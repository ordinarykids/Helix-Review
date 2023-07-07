import Link from 'next/link'
import fetchFooterNav from 'app/(frontend)/lib/sanity/fetch/fetchFooterNav'
import BrandLogo from '../svgs/BrandLogo'
import FooterNav from '../FooterNav'
import styles from './SiteFooter.module.scss'

export default async function SiteFooter() {
  const footerNavData = await fetchFooterNav()

  return (
    <footer className={styles.footer} id='siteFooter'>
      <div className={styles.main}>
        <div className={styles.main_Container}>
          <div className={styles.content}>
            <Link href='/' className={styles.brandLink} aria-label='Helix brand logo'>
              <BrandLogo />
            </Link>
          </div>
          <div className={styles.nav}>
            <FooterNav navData={footerNavData} />
          </div>
        </div>
      </div>
      <div className={styles.legal}>
        <div className={styles.legal_Container}>
          LEGAL BAR
        </div>
      </div>
    </footer>
  )
}
