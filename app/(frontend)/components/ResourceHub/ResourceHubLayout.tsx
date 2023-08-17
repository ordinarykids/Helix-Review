import fetchAllResourcesAndTerms from 'app/(frontend)/lib/sanity/fetch/fetchAllResourcesAndTerms'
import ResourceHub, { ResourceHubLayoutProps } from './components/ResourceHub/ResourceHub'

export default async function ResourceHubLayout({ header }: ResourceHubLayoutProps) {
  const resourcesData = await fetchAllResourcesAndTerms()

  return (
    <ResourceHub header={header} resourcesData={resourcesData} />
  )
}
