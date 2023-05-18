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
    // defineField({
    //   name: 'styledLink',
    //   type: 'styledLink',
    //   title: 'Link',
    // }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
    }),
    defineField({
      name: 'media',
      type: 'file', // pending final file format
      title: 'Media',
      description: 'Add file to override image',
      hidden: ({ document }) => (document.slug?.current !== 'home'),
    }),
    defineField({
      name: 'homeHeroSubsectionTitle',
      type: 'text',
      title: 'Subsection Title',
      rows: 1,
      hidden: ({ document }) => (document.slug?.current !== 'home'),
    }),
    defineField({
      name: 'cards',
      type: 'array',
      title: 'Subsection Cards',
      of: [
        defineArrayMember({ type: 'cardWithImage' }),
      ],
      hidden: ({ document }) => (document.slug?.current !== 'home'),
    }),
  ],
})

export default pageHero
