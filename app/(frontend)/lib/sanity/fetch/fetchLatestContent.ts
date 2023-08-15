import { groq } from '@sanity-codegen/client'
import type { PortableTextBlock } from '@portabletext/types'
import type ImageField from 'app/(frontend)/types/image'
import imgReference from '../partials/imgReference'
import { sanityFetch } from '../sanityClient'

interface ILatestContentTeaser {
  author: {
    firstName: string | null
    lastName: string | null
    designation: string | null
    title: string | null
  } | null
  _createdAt: string
  _id: string
  externalUrl: string | null
  featuredImage: ImageField
  gridThumbnail: ImageField
  slug: string
  subtitle: PortableTextBlock[] | null
  title: string | null
}

export type TLatestContent = ILatestContentTeaser[]

const fetchLatestContent = async (taxonomyField: string, term: string, count: number) => {
  const query = groq`*[
  _type == "resource"
  ${taxonomyField === 'resourceType' ? ' && type->slug.current == $term' : ' && count((categories[]->slug.current)[@ in [$term]]) > 0'}
  ] | order(_createdAt desc)[0...$count] {
    _id,
    _createdAt,
    "slug": slug.current,
    title,
    subtitle,
    author->{
      firstName,
      lastName,
      designation,
      title,
    },
    externalUrl,
    'featuredImage': featuredImage.image.asset->${imgReference},
    'gridThumbnail': gridThumbnail.asset->${imgReference},
  }`
  const res = await sanityFetch<TLatestContent>(query, { term, count })
  return res
}

export default fetchLatestContent
