import { codegen, groq } from '@sanity-codegen/client'
import { ImageProps } from 'next/image'
import type { PortableTextBlock } from '@portabletext/types'
import type { StyledLinkProps } from '@/app/(frontend)/components/StyledLink/StyledLink'
import { sanityFetch } from '../sanityClient'

export type PageHeroType = {
  title?: string | null,
  pageHero?: {
    header?: string | null,
    subheader?: PortableTextBlock | null,
    media?: string | null,
    button: StyledLinkProps | null,
    image: ImageProps | null,
  } | null,
}

const fetchPageByPath = async (pagePath: string) => {
  const query = codegen(
    'PageByPath',
    groq`*[_type == "page" && slug.current == $pagePath][0]{
      title,
      'pageHero': hero {
        header,
        subheader,
        media,
        'button': {
          'text': styledLink.text,
          'link': styledLink.link,
          'style': styledLink.style,
          'align': styledLink.align,
          'type': styledLink._type,
            },
        'image': {
          'src': image.asset->url,
          'alt': image.asset->metadata.altText,
          'height': image.asset->metadata.dimensions.height,
          'width': image.asset->metadata.dimensions.width,
          'aspectRatio': image.asset->metadata.dimensions.aspectRatio,
          'blurHash': metadata.blurHash,
        },
      },
    }`,
  )
  const res = await sanityFetch<Sanity.Default.Query.PageByPath>(query, { pagePath })
  return res
}

export default fetchPageByPath
