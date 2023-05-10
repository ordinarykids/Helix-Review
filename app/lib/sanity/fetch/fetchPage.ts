import { groq } from 'next-sanity'
import { sanityFetch } from '../sanityClient'

const fetchPage = async (pagePath: string) => {
  const query = groq`*[_type == "page" && slug.current == "${pagePath}"][0]{
      title,
    }`
  const res = await sanityFetch(query)
  return res
}

export default fetchPage
