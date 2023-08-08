const resourceTeaser = `
{
  _id,
  _createdAt,
  "slug": slug.current,
  title,
  publication,
  publicationSource,
  externalUrl,
  color,
  type->{
    name,
    "slug": slug.current,
    color,
  },
}
`

export default resourceTeaser
