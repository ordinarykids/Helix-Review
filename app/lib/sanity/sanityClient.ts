import { cache } from 'react'
import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION // "2022-11-16"

export const sanityClient = createClient({
  projectId: projectId || 'g5irbagy',
  dataset: dataset || 'staging',
  apiVersion: apiVersion || '2022-05-09',
  useCdn: false,
})

// see https://github.com/sanity-io/next-sanity#appdir-react-server-components-and-caching
export const sanityFetch = cache(sanityClient.fetch.bind(sanityClient))
