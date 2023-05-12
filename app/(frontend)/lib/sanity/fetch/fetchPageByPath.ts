import { groq } from 'next-sanity'
import { sanityFetch } from '../sanityClient'

const fetchPageByPath = async (pagePath: string) => {
  const query = groq`*[_type == "page" && slug.current == $pagePath][0]{
      title,
    }`
  const res = await sanityFetch(query, { pagePath })
  return res
}

export default fetchPageByPath
