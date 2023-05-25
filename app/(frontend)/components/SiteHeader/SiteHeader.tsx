import Image from 'next/image'
import Link from 'next/link'
import fetchMainNav from 'app/(frontend)/lib/sanity/fetch/fetchMainNav'
import MainNav from '../MainNav'
import styles from './SiteHeader.module.scss'

export default async function SiteHeader() {
  const mainNavData = await fetchMainNav()

  return (
    <header className={styles.nav}>
      <div className={styles.container}>
        <Link href='/'>
          <Image src='/helix_brand_logo.png' width={123} height={32} alt='Helix brand logo' />
        </Link>
        <MainNav navData={mainNavData} />
      </div>
    </header>
  )
}
