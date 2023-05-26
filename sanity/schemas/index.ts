// Document schemas
import blogPost from './documents/blogPost'
import category from './documents/category'
import page from './documents/page'
import tag from './documents/tag'

// Object schemas
import cardWithImage from './objects/cardWithImage'
import featuredImage from './objects/featuredImage'
import pageHero from './objects/pageHero'
import seo from './objects/seo'
import styledLink from './objects/styledLink'

// eslint-disable-next-line import/prefer-default-export
export const schemaTypes = [
  page,
  blogPost,
  cardWithImage,
  category,
  featuredImage,
  pageHero,
  seo,
  styledLink,
  tag,
]
