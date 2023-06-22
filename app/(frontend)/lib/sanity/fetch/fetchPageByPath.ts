import { groq } from 'next-sanity'
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
  pageBuilder: (| GeometricCTAsField | PageSectionField)[] | null
}

const fetchPageByPath = async (pagePath: string) => {
  const query = groq`*[_type == "page" && slug.current == $pagePath][0]{
    title,
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
