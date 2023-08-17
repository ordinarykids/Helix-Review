import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'hubspotForm',
  title: 'Hubspot Form',
  type: 'object',
  fields: [
    defineField({
      name: 'header',
      type: 'string',
      title: 'Header',
    }),
    defineField({
      title: 'Text',
      name: 'text',
      type: 'array',
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
              { title: 'Underline', value: 'underline' },
            ],
          },
          lists: [],
        }),
      ],
    }),
    defineField({
      name: 'hubspotFormId',
      type: 'string',
      title: 'Hubspot Form Id',
      codegen: { required: true },
      validation: (Rule) => Rule.required().error('Hubspot form ID is required'),
    }),
  ],
})
