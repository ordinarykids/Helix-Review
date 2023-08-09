import { groq } from '@sanity-codegen/client'
import { IResourceTeaser } from 'app/(frontend)/components/ResourceHub/components/ResourceTeaser/ResourceTeaser'
import { sanityFetch } from '../sanityClient'
import resourceTeaser from '../partials/resourceTeaser'

interface ResourceFetchTeaser extends IResourceTeaser {
  _id: string
}

export type FilteredResources = {
  resources: ResourceFetchTeaser[]
  count: number
}

const fetchFilteredResources = async (categoryTerms: string[], type: string) => {
  const resourcesQuery = `*[
    _type == "resource"
    ${categoryTerms && categoryTerms.length > 0 ? '&& count((categories[]->slug.current)[@ in $categoryTerms]) == count($categoryTerms)' : ''}
    ${type ? '&& type->slug.current == $type' : ''}
  ]`
  const query = groq`{
    'resources': ${resourcesQuery} | order(_createdAt desc)${resourceTeaser},
    'count': count(${resourcesQuery})
  }`
  const res = await sanityFetch<FilteredResources>(query, { categoryTerms, type })
  return res
}

export default fetchFilteredResources
