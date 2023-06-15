// Document schemas
import blogPost from './documents/blogPost'
import category from './documents/category'
import mainNavigation from './documents/mainNavigation'
import page from './documents/page'
import tag from './documents/tag'

// Fields
import pageBuilder from './fields/pageBuilder'

// Object schemas
import button from './objects/button'
import featuredImage from './objects/featuredImage'
import geometricCTA from './objects/geometricCTA'
import geometricCTAs from './objects/geometricCTAs'
import link from './objects/link'
import navigationSectionPanel from './objects/navigationSectionPanel'
import pageSection from './objects/pageSection'
import seo from './objects/seo'
import styledLink from './objects/styledLink'

// Page sections
import videoEmbed from './pageSections/videoEmbed'

// eslint-disable-next-line import/prefer-default-export
export const schemaTypes = [
  page,
  blogPost,
  button,
  category,
  featuredImage,
  geometricCTA,
  geometricCTAs,
  link,
  mainNavigation,
  navigationSectionPanel,
  pageBuilder,
  pageSection,
  seo,
  styledLink,
  tag,
  videoEmbed,
]
