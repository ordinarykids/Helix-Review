import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import fetchPageByPath from '../lib/sanity/fetch/fetchPageByPath'
import GeometricCTAs from '../components/GeometricCTAs'
import PageSection from '../components/PageSection'
import styles from './page.module.scss'
import HomePageHero from '../components/HomePageHero/HomePageHero'

export async function generateMetadata(
  { params }: { params: { slug: string[] } },
): Promise<Metadata> {
  const { slug } = params
  const pagePath = slug ?? ['home']
  const pageData = await fetchPageByPath(pagePath.join('/'))

  if (!pageData) {
    return {}
  }

  const { title } = pageData

  return {
    title,
  }
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  const { slug } = params
  const pagePath = slug ?? ['home']
  const pageData = await fetchPageByPath(pagePath.join('/'))

  if (!pageData) {
    notFound()
  }

  const { title, homePageHero, pageBuilder } = pageData
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>{title || 'No title found'}</h1>
      </div>
      {homePageHero && <HomePageHero {...homePageHero} />}

      {pageBuilder && pageBuilder.length > 0 && pageBuilder.map((buildingBlock) => {
        switch (buildingBlock?._type) {
          case 'pageSection':
            return <PageSection key={buildingBlock._key} {...buildingBlock} />

          case 'geometricCTAs':
            return <GeometricCTAs key={buildingBlock._key} {...buildingBlock} />

          default:
            return null
        }
      })}
    </main>
  )
}
