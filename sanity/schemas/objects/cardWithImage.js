import { defineType, defineField } from 'sanity'

const cardWithImage = defineType({
  name: 'cardWithImage',
  type: 'object',
  title: 'Card with Image',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
    }),
    defineField({
      name: 'title',
      type: 'text',
      title: 'Title',
      rows: 1,
    }),
    // styledLink
  ],
})

export default cardWithImage
