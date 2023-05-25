import { codegen, groq } from '@sanity-codegen/client'
import { sanityFetch } from '../sanityClient'

const fetchMainNav = async () => {
  const query = codegen(
    'MainNavigation',
    groq`*[_type == "mainNavigation"][0]{
      navigationSections[]{
        title,
        navigationSectionPanel {
          columns[]{
            navigationLinkGroups[] {
              title,
              navigationLinks[] {
                title,
                url {
                  "link": internalLink->slug.current,
                  externalUrl,
                },
              },
            },
          },
          teaser,
        },
      },
    }`,
  )
  const res = await sanityFetch<Sanity.Default.Query.MainNavigation>(query)
  return res
}

export default fetchMainNav
