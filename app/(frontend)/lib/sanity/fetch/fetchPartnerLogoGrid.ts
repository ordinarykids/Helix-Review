import { groq } from 'next-sanity'
import { sanityFetch } from '../sanityClient'

// export type PartnerLogoGrid = {

// }

const fetchPartnerLogoGrid = async () => {
  const query = groq`*[_type == "page" && slug.current == $pagePath][1]{
    partnerLogoGrid
  }`
  const res = await sanityFetch(query)
  console.log('hi ', res)
  return res
}

export default fetchPartnerLogoGrid
