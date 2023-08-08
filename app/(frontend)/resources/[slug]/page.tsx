import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import fetchBlogPostBySlug from 'app/(frontend)/lib/sanity/fetch/fetchBlogPostBySlug'
import styles from './page.module.scss'

export async function generateMetadata(
  { params }: { params: { slug: string } },
): Promise<Metadata> {
  const { slug } = params
  const blogPost = await fetchBlogPostBySlug(slug)

  if (!blogPost) {
    return {}
  }

  const { title } = blogPost

  return {
    title,
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params
  const blogPost = await fetchBlogPostBySlug(slug)

  if (!blogPost) {
    notFound()
  }

  const { title, categories, keywords } = blogPost

  return (
    <main className={styles.container}>
      <h1>{title}</h1>
      {categories && (
        <div>
          <div>
            Categories:
            <ul>
              {categories.map((category) => {
                if (category) {
                  const { slug: categorySlug, name: categoryName } = category
                  return categorySlug ? (
                    <li>
                      <Link href={`/resources/category/${categorySlug}`}>
                        {categoryName}
                      </Link>
                    </li>
                  ) : null
                }
                return null
              })}
            </ul>
          </div>
        </div>
      )}
      {keywords && (
        <div>
          <div>
            Keywords:
            <ul>
              {keywords.map((keyword) => {
                if (keyword) {
                  const { slug: keywordSlug, name: keywordName } = keyword
                  return keywordSlug ? (
                    <li>
                      <Link href={`/resources/keyword/${keywordSlug}`}>
                        {keywordName}
                      </Link>
                    </li>
                  ) : null
                }
                return null
              })}
            </ul>
          </div>
        </div>
      )}
    </main>
  )
}
