import { groq } from 'next-sanity'
import { sanityFetch } from '../sanityClient'

export type MainNavCTALink = {
  title?: string | null;
  url?: {
    externalUrl?: string | null;
    link?: string | null;
  };
} | null | undefined

export type MainNavigation = {
  navigationSections:
    | {
        navigationSectionPanel: {
          ctaLink?: MainNavCTALink;
          navigationLinkGroups: {
            navigationLinks: {
              _key: string;
              title: string;
              url: {
                externalUrl?: string | null;
                link?: string | null;
              };
            }[];
            _key: string;
            title?: string | null;
            titlelink?: {
              externalUrl?: string | null;
              link?: string | null;
            } | null;
          }[];
          teaser: {
            _type: string;
            image?: {
              altText?: string | null;
              aspectRatio: number;
              blurHash: string;
              height: number;
              url: string;
              width: number;
            };
            slug: string;
            title?: string | null;
          } | null;
          hideTeaserDesktop: boolean | null;
          hideTeaserMobile: boolean | null;
        };
        _key: string;
        title: string;
      }[]
    | null;
};

const fetchMainNav = async () => {
  const query = groq`*[_type == "mainNavigation"][0]{
    navigationSections[]{
      _key,
      title,
      navigationSectionPanel {
        navigationLinkGroups[] {
          _key,
          title,
          titlelink {
            "link": internalLink->slug.current,
            externalUrl,
          },
          navigationLinks[] {
            _key,
            title,
            url {
              "link": internalLink->slug.current,
              externalUrl,
            },
          },
        },
        teaser->{
          'image': featuredImage.image.asset->{
            altText,
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
        hideTeaserDesktop,
        hideTeaserMobile,
        ctaLink {
          title,
          url {
            "link": internalLink->slug.current,
            externalUrl,
          },
        },
      },
    },
  }`
  const res = await sanityFetch<MainNavigation>(query)
  return res
}

export default fetchMainNav
