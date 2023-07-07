import { groq } from 'next-sanity'
import type LinkField from 'app/(frontend)/types/link'
import { sanityFetch } from '../sanityClient'
import link from '../partials/link'

export type FooterNavigation = {
  navigationSections:
    | {
        navigationLinks: {
          _key: string;
          title: string;
          url: LinkField;
        }[];
        _key: string;
        title?: string | null;
      }[]
    | null;
};

const fetchFooterNav = async () => {
  const query = groq`*[_type == "footerNavigation"][0]{
    navigationSections[]{
      _key,
      title,
      navigationLinks[] {
        _key,
        title,
        url ${link},
      },
    },
  }`
  const res = await sanityFetch<FooterNavigation>(query)
  return res
}

export default fetchFooterNav
