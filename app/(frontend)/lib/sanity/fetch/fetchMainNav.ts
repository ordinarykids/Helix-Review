import { groq } from 'next-sanity'
import { sanityFetch } from '../sanityClient'

export type MainNavigation = {
  navigationSections:
    | {
        navigationSectionPanel: {
          ctaLink?: {
            title?: string | null;
            url?: {
              externalUrl?: string | null;
              link?: string | null;
            };
          } | null;
          navigationLinkGroups: {
            navigationLinks: {
              title: string;
              url: {
                externalUrl?: string | null;
                link?: string | null;
              };
            }[];
            title?: string | null;
            titlelink?: {
              externalUrl?: string | null;
              link?: string | null;
            } | null;
          }[];
          teaser: {
            _type: string;
            image?: {
              aspectRatio: number;
              blurHash: string;
              height: number;
              url: string;
              width: number;
            };
            slug: string;
            title?: string | null;
          } | null;
        };
        title: string;
      }[]
    | null;
};

const fetchMainNav = async () => {
  const query = groq`*[_type == "mainNavigation"][0]{
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
  },`
  const res = await sanityFetch<MainNavigation>(query)
  return res
}

export default fetchMainNav
