import { defineField } from 'sanity'

export default {
  name: 'styledLink',
  type: 'object',
  title: 'Link',
  initialValue: {
    style: 'default',
    align: 'default',
  },
  fields: [
    defineField({
      name: 'text',
      type: 'string',
      title: 'Text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      type: 'url',
      title: 'Link',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'style',
      type: 'string',
      title: 'Style',
      options: {
        list: [
          { title: 'Primary Button', value: 'default' },
          { title: 'Secondary Button', value: 'secondary' },
          { title: 'Carat', value: 'carat' },
        ],
      },
    }),
    defineField({
      name: 'align',
      type: 'string',
      title: 'Align',
      options: {
        list: [
          { title: 'Left', value: 'default' },
          { title: 'Center', value: 'center' },
        ],
      },
    }),
  ],
}
