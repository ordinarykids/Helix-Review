import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'partnerLogoGrid',
  type: 'object',
  title: 'Partner Logo Grid',
  fields: [
    defineField({
      name: 'header',
      type: 'string',
      title: 'Header',
    }),
    defineField({
      name: 'subheader',
      type: 'text',
      title: 'Subheader',
      rows: 3,
    }),
    defineField({
      name: 'logos',
      type: 'array',
      title: 'Logos',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'linkedLogo',
          fields: [
            defineField({
              name: 'logo',
              type: 'image',
              title: 'Logo',
              codegen: { required: true },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'external',
              type: 'url',
              title: 'URL',
            }),
            defineField({
              name: 'file',
              type: 'file',
              title: 'File',
            }),
          ],
        }),
      ],
    }),
  ],
})
