import { groq } from '@sanity-codegen/client'
import { IResourceTeaser } from 'app/(frontend)/components/ResourceHub/components/ResourceTeaser/ResourceTeaser'
import { TResourceFilter } from 'app/(frontend)/components/ResourceHub/components/FilterGroup/FilterGroup'
import { sanityFetch } from '../sanityClient'
import resourceTeaser from '../partials/resourceTeaser'

interface ResourceFetchTeaser extends IResourceTeaser {
  _id: string
}

export type AllResources = {
  resources: ResourceFetchTeaser[];
  categories: TResourceFilter[]
  types: TResourceFilter[]
}

const fetchAllResourcesAndTerms = async () => {
  const query = groq`{
    'resources': *[_type == "resource"] | order(_createdAt desc)${resourceTeaser},
    'categories': *[_type == 'category'] | order(name asc){
      name,
      "slug": slug.current,
     'id':*[defined(categories[0]) && _type == "resource" && references(^._id)][0]{
       _id
      }
    }[defined(id)],
    'types': *[_type == 'resourceType'] | order(name asc){
      name,
      "slug": slug.current,
     'id':*[defined(categories[0]) && _type == "resource" && references(^._id)][0]{
       _id
      }
    }[defined(id)]
  }`
  const res = await sanityFetch<AllResources>(query)
  return res
}

export default fetchAllResourcesAndTerms
