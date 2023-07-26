import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'caseStudyTwoUpStats',
  type: 'object',
  title: '2-Up Stats Cards',
  fields: [
    defineField({
      title: 'Header',
      name: 'header',
      type: 'string',
    }),
    defineField({
      title: 'Columns',
      name: 'columns',
      type: 'object',
      options: {
        columns: 2,
      },
      fields: [
        defineField({
          title: 'Left Column',
          name: 'col1',
          type: 'array',
          of: [
            defineArrayMember({ type: 'statCard' }),
          ],
        }),
        defineField({
          title: 'Right Column',
          name: 'col2',
          type: 'array',
          of: [
            defineArrayMember({ type: 'statCard' }),
          ],
        }),
      ],
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    }),
  ],
})
