import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import fetchPageByPath from '../lib/sanity/fetch/fetchPageByPath'
import GeometricCTAs from '../components/GeometricCTAs'
import styles from './page.module.scss'
import PageHero from '../components/PageHero/PageHero'

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

  const { title, pageHero, pageBuilder } = pageData
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>{title || 'No title found'}</h1>
      </div>
      {pageHero && <PageHero {...pageHero} />}

      {pageBuilder && pageBuilder.length > 0 && pageBuilder.map((buildingBlock) => {
        switch (buildingBlock?._type) {
          case 'geometricCTAs':
            return <GeometricCTAs key={buildingBlock._key} {...buildingBlock} />

          default:
            return null
        }
      })}
    </main>
  )
}
