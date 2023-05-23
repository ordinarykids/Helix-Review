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
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const { title } = selection
      return {
        title,
      }
    },
  },
})

export default cardWithImage
