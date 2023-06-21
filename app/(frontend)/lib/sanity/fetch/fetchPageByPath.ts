import { groq } from 'next-sanity'
import type { HomePageHeroType } from '@/app/(frontend)/components/HomePageHero/HomePageHero'
import type { HomeHeroThreeUpType } from '@/app/(frontend)/components/HomeHeroThreeUp/HomeHeroThreeUp'
import { GeometricCTAsProps } from 'app/(frontend)/components/GeometricCTAs/GeometricCTAs'
import { PartnerLogoGridProps } from '@/app/(frontend)/components/PartnerLogoGrid/PartnerLogoGrid'
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

interface PartnerGridField extends Key, PartnerLogoGridProps {
  _type: 'partnerLogoGrid'
}

type PageByPath = {
  title: string | null
  homePageHero: HomePageHeroType | null,
  homeHeroThreeUp: HomeHeroThreeUpType | null,
  pageBuilder: (| GeometricCTAsField | PartnerGridField | PageSectionField)[] | null
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
    },
  }`
  const res = await sanityFetch<PageByPath>(query, { pagePath })
  return res
}

export default fetchPageByPath
