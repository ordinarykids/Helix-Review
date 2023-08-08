import { groq } from '@sanity-codegen/client'
import { IResourceTeaser } from 'app/(frontend)/components/ResourceHub/components/ResourceTeaser/ResourceTeaser'
import { sanityFetch } from '../sanityClient'
import resourceTeaser from '../partials/resourceTeaser'

interface ResourceFetchTeaser extends IResourceTeaser {
  _id: string
}

export type FilteredResources = ResourceFetchTeaser[]

const fetchFilteredResources = async (categoryTerms: string[], type: string) => {
  const query = groq`*[
    _type == "resource"
    ${categoryTerms && categoryTerms.length > 0 ? '&& count((categories[]->slug.current)[@ in $categoryTerms]) == count($categoryTerms)' : ''}
    ${type ? '&& type->slug.current == $type' : ''}
  ] | order(_createdAt desc)${resourceTeaser}`
  const res = await sanityFetch<FilteredResources>(query, { categoryTerms, type })
  return res
}

export default fetchFilteredResources
