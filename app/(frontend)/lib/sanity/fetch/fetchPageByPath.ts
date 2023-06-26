import { groq } from 'next-sanity'
import type { HomePageHeroType } from '@/app/(frontend)/components/HomePageHero/HomePageHero'
import type { HomeHeroThreeUpType } from '@/app/(frontend)/components/HomeHeroThreeUp/HomeHeroThreeUp'
import { GeometricCTAsProps } from 'app/(frontend)/components/GeometricCTAs/GeometricCTAs'
import { PageSectionProps } from 'app/(frontend)/components/PageSection/PageSection'
import { sanityFetch } from '../sanityClient'
import imgReference from '../partials/imgReference'
import link from '../partials/link'

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
  homeHeroThreeUp: HomeHeroThreeUpType | null,
  pageBuilder: (| GeometricCTAsField | PageSectionField)[] | null
}

const fetchPageByPath = async (pagePath: string) => {
  const query = groq`*[_type == "page" && slug.current == $pagePath][0]{
    title,
    'homePageHero': hero {
      header,
      subheader,
      media,
      buttonText,
      buttonLink ${link},
      'image': image.asset->${imgReference},
    },
    homeHeroThreeUp {
      ...,
      ctas[] {
        ...,
        'image': image.asset->${imgReference},
        buttonUrl ${link},
      }
    },
    pageBuilder[] {
      ...,
      _type == 'geometricCTAs' => {
        ...,
        ctas[] {
          ...,
          linkUrl ${link},
        }
      },
      _type == 'pageSection' => {
        ...,
        innerBlocks[] {
          ...,
          _type == 'twoUp' => {
            ...,
            'image': image.asset->${imgReference},
          },
        },
      },
    },
  }`
  const res = await sanityFetch<PageByPath>(query, { pagePath })
  return res
}

export default fetchPageByPath
