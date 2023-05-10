import { notFound } from 'next/navigation'
import fetchPage from '../lib/sanity/fetch/fetchPage'
import styles from './page.module.css'

export default async function Page({ params }: { params: { slug: string[] } }) {
  const { slug } = params
  const pagePath = slug ?? ['home']
  const pageData = await fetchPage(pagePath.join('/'))

  if (!pageData) {
    notFound()
  }
  return (
    <main className={styles.main}>
      <h1>{pageData?.title || 'No title found'}</h1>
    </main>
  )
}
