// Document schemas
import blogPost from './documents/blogPost'
import category from './documents/category'
import mainNavigation from './documents/mainNavigation'
import page from './documents/page'
import tag from './documents/tag'

// Object schemas
import featuredImage from './objects/featuredImage'
import link from './objects/link'
import navigationLink from './objects/navigationLink'
import navigationSectionPanel from './objects/navigationSectionPanel'
import seo from './objects/seo'
import styledLink from './objects/styledLink'

// eslint-disable-next-line import/prefer-default-export
export const schemaTypes = [
  page,
  blogPost,
  category,
  featuredImage,
  mainNavigation,
  link,
  navigationLink,
  navigationSectionPanel,
  seo,
  styledLink,
  tag,
]
