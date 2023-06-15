// Document schemas
import blogPost from './documents/blogPost'
import category from './documents/category'
import mainNavigation from './documents/mainNavigation'
import page from './documents/page'
import tag from './documents/tag'

// Fields
import icon from './fields/icon'
import pageBuilder from './fields/pageBuilder'

// Object schemas
import button from './objects/button'
import featuredImage from './objects/featuredImage'
import pageHero from './objects/pageHero'
import geometricCTA from './objects/geometricCTA'
import geometricCTAs from './objects/geometricCTAs'
import iconCard from './objects/iconCard'
import link from './objects/link'
import navigationSectionPanel from './objects/navigationSectionPanel'
import pageSection from './objects/pageSection'
import seo from './objects/seo'
import styledLink from './objects/styledLink'

// Page sections
import cardGrid from './pageSections/cardGrid'
import videoEmbed from './pageSections/videoEmbed'

// eslint-disable-next-line import/prefer-default-export
export const schemaTypes = [
  page,
  blogPost,
  button,
  cardGrid,
  category,
  featuredImage,
  pageHero,
  geometricCTA,
  geometricCTAs,
  iconCard,
  icon,
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
