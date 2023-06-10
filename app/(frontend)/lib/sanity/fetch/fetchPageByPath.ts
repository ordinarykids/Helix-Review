import { codegen, groq } from '@sanity-codegen/client'
import { ImageProps } from 'next/image'
import { sanityFetch } from '../sanityClient'

export type PageHeroType = {
  title?: string | null,
  partnerLogoGrid?: {
    header?: string | null,
    subheader?: string | null,
    logos: {
      _key: string,
      image: ImageProps | null,
      externalLink?: string | null,
      uploadedFileURL?: string | null,
    } | null,
  } | null,
}

const fetchPageByPath = async (pagePath: string) => {
  const query = codegen(
    'PageByPath',
    groq`*[_type == "page" && slug.current == $pagePath][0]{
      title,
      partnerLogoGrid {
        header,
        subheader,
        logos[] {
          _key,
          'image': {
            'src': logo.asset->url,
            'alt': logo.asset->metadata.altText,
            'height': logo.asset->metadata.dimensions.height,
            'width': logo.asset->metadata.dimensions.width,
            'aspectRatio': logo.asset->metadata.dimensions.aspectRatio,
            'blurHash': metadata.blurHash,
          },
          externalLink,
          'uploadedFileURL': file.asset->url,
        }
      }
    }`,
  )
  const res = await sanityFetch<Sanity.Default.Query.PageByPath>(query, { pagePath })
  return res
}

export default fetchPageByPath
