import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import fetchPageByPath from '../lib/sanity/fetch/fetchPageByPath'
import styles from './page.module.css'

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
  return (
    <main className={styles.main}>
      <h1>{pageData?.title || 'No title found'}</h1>
    </main>
  )
}
