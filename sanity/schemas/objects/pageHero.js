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
  ],
})

export default pageHero
