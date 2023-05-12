import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import fetchBlogPostBySlug from '../../lib/sanity/fetch/fetchBlogPostBySlug'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Blog',
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params
  const blogPost = await fetchBlogPostBySlug(slug)

  if (!blogPost) {
    notFound()
  }

  const { title } = blogPost

  return (
    <main className={styles.main}>
      <h1>{title}</h1>
    </main>
  )
}
