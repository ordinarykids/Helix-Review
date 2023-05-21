import { codegen, groq } from '@sanity-codegen/client'
import { sanityFetch } from '../sanityClient'

const fetchPageByPath = async (pagePath: string) => {
  const query = codegen(
    'PageByPath',
    groq`*[_type == "page" && slug.current == $pagePath][0]{
      title,
      hero,
    }`,
  )
  const res = await sanityFetch<Sanity.Default.Query.PageByPath>(query, { pagePath })
  return res
}

export default fetchPageByPath
