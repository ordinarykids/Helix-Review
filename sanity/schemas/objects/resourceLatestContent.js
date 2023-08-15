import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'resourceLatestContent',
  title: 'Resource Latest Content',
  type: 'object',
  fields: [
    defineField({
      name: 'header',
      type: 'string',
      title: 'Header',
      initialValue: 'The Latest Content From Helix',
    }),
    defineField({
      name: 'sections',
      type: 'array',
      title: 'Sections',
      of: [
        defineArrayMember({
          name: 'section',
          type: 'object',
          title: 'Section',
          fields: [
            defineField({
              title: 'Type/Category',
              name: 'term',
              type: 'reference',
              to: [
                { type: 'resourceType' },
                { type: 'category' },
              ],
              options: {
                disableNew: true,
              },
              codegen: { required: true },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'layout',
              title: 'Layout',
              type: 'string',
              initialValue: 'threeUp',
              options: {
                list: [
                  { title: '3-Up Cards', value: 'threeUp' },
                  { title: '4-Up Cards', value: 'fourUp' },
                  { title: 'Wide Cards', value: 'wideCards' },
                ],
              },
              codegen: { required: true },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'showImage',
              title: 'Show Image',
              type: 'boolean',
              initialValue: true,
              codegen: { required: true },
              validation: (Rule) => Rule.required(),
              hidden: ({ parent }) => parent?.layout === 'wideCards',
            }),
            defineField({
              name: 'showDate',
              title: 'Show Date',
              type: 'boolean',
              initialValue: true,
              codegen: { required: true },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'showAuthor',
              title: 'Show Author',
              type: 'boolean',
              initialValue: false,
              codegen: { required: true },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'showSubtitle',
              title: 'Show Subtitle',
              type: 'boolean',
              initialValue: false,
              codegen: { required: true },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'bgColor',
              title: 'Background Color',
              type: 'string',
              initialValue: 'white',
              options: {
                list: [
                  { title: 'White', value: 'white' },
                  { title: 'Blue', value: 'blue' },
                ],
              },
              codegen: { required: true },
              validation: (Rule) => Rule.required(),
              hidden: ({ parent }) => parent?.layout === 'wideCards',
            }),
          ],
          preview: {
            select: {
              title: 'term.name',
            },
          },
        }),
      ],
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    }),
  ],
})
