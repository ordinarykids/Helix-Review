import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'fourPointChart',
  type: 'object',
  title: 'Four Point Chart',
  fields: [
    defineField({
      name: 'header',
      type: 'string',
      title: 'Header',
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'points',
      type: 'array',
      title: 'Points',
      of: [
        defineArrayMember({
          name: 'point',
          type: 'object',
          title: 'Point',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
              title: 'Title',
            }),
            defineField({
              name: 'text',
              type: 'text',
              title: 'Text',
              rows: 2,
            }),
          ],
        }),
      ],
      codegen: { required: true },
      validation: (Rule) => Rule.required().length(4).error('Must have 4 points.'),
    }),
  ],
})
