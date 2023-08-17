import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'footerNavigation',
  type: 'document',
  title: 'Footer Navigation',
  fields: [
    defineField({
      name: 'navigationSections',
      type: 'array',
      title: 'Navigation Sections',
      of: [
        defineArrayMember({
          name: 'navigationSection',
          type: 'object',
          title: 'Navigation Section',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
              title: 'Section Title',
              codegen: { required: true },
              validation: (Rule) => Rule.required(),
            }),
            {
              name: 'navigationLinks',
              type: 'array',
              title: 'Links',
              of: [defineArrayMember({ type: 'navigationLink' })],
              codegen: { required: true },
              validation: (Rule) => Rule.required(),
            },
          ],
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Footer Nav',
      }
    },
  },
})
