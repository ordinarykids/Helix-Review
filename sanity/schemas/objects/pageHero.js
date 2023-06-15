import { defineType, defineField, defineArrayMember } from 'sanity'

const pageHero = defineType({
  name: 'pageHero',
  type: 'object',
  title: 'Hero',
  fields: [
    defineField({
      name: 'header',
      type: 'text',
      title: 'Header',
      rows: 3,
    }),
    defineField({
      name: 'subheader',
      type: 'array',
      title: 'Subheader',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
            annotations: [],
          },
          lists: [],
        }),
      ],
    }),
    defineField({
      name: 'button',
      type: 'button',
      title: 'Button',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
    }),
    defineField({
      name: 'media',
      type: 'url', // pending final file format
      title: 'Media',
      description: 'Add file url to override image',
      hidden: ({ document }) => (document.slug?.current !== 'home'),
    }),
  ],
})

export default pageHero
