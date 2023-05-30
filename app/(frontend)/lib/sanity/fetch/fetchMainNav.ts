import { codegen, groq } from '@sanity-codegen/client'
import { sanityFetch } from '../sanityClient'

const fetchMainNav = async () => {
  const query = codegen(
    'MainNavigation',
    groq`*[_type == "mainNavigation"][0]{
      navigationSections[]{
        title,
        navigationSectionPanel {
          navigationLinkGroups[] {
            title,
            titlelink {
              "link": internalLink->slug.current,
              externalUrl,
            },
            navigationLinks[] {
              title,
              url {
                "link": internalLink->slug.current,
                externalUrl,
              },
            },
          },
          teaser->{
            'image': featuredImage.image.asset->{
              url,
              'height': metadata.dimensions.height,
              'width': metadata.dimensions.width,
              'aspectRatio': metadata.dimensions.aspectRatio,
              'blurHash': metadata.blurHash,
            },
            title,
            _type,
            "slug": slug.current,
          },
          ctaLink {
            title,
            url {
              "link": internalLink->slug.current,
              externalUrl,
            },
          },
        },
      },
    }`,
  )
  const res = await sanityFetch<Sanity.Default.Query.MainNavigation>(query)
  return res
}

export default fetchMainNav
