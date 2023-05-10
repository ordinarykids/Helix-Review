// Document schemas
import blogPost from './documents/blogPost'
import page from './documents/page'

// Object schemas
import featuredImage from './objects/featuredImage'
import seo from './objects/seo'

// eslint-disable-next-line import/prefer-default-export
export const schemaTypes = [
  page,
  blogPost,
  featuredImage,
  seo,
]
