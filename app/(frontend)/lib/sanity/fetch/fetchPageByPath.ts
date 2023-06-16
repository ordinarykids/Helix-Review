import { groq } from 'next-sanity'
import { HomePageHeroType } from '@/app/(frontend)/components/HomePageHero/HomePageHero'
import { GeometricCTAsProps } from 'app/(frontend)/components/GeometricCTAs/GeometricCTAs'
import { PageSectionProps } from 'app/(frontend)/components/PageSection/PageSection'
import { sanityFetch } from '../sanityClient'

interface Key {
  _key: string,
}

interface GeometricCTAsField extends Key, GeometricCTAsProps {
  _type: 'geometricCTAs'
}

interface PageSectionField extends Key, PageSectionProps {
  _type: 'pageSection'
}

type PageByPath = {
  title: string | null
  homePageHero: HomePageHeroType | null,
  pageBuilder: (| GeometricCTAsField | PageSectionField)[] | null
}

const fetchPageByPath = async (pagePath: string) => {
  const query = groq`*[_type == "page" && slug.current == $pagePath][0]{
    title,
    'homePageHero': hero {
      header,
      subheader,
      media,
      button,
      'image': {
        'src': image.asset->url,
        'alt': image.asset->metadata.altText,
        'height': image.asset->metadata.dimensions.height,
        'width': image.asset->metadata.dimensions.width,
        'aspectRatio': image.asset->metadata.dimensions.aspectRatio,
        'blurHash': metadata.blurHash,
      }
    },
    pageBuilder[] {
      ...,
      _type == 'geometricCTAs' => {
        ...,
        ctas[] {
          ...,
          linkUrl {
            "link": internalLink->slug.current,
            externalUrl,
          },
        }
      },
    },
  }`
  const res = await sanityFetch<PageByPath>(query, { pagePath })
  return res
}

export default fetchPageByPath
