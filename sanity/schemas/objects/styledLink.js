import { defineField } from 'sanity'

export default {
  name: 'styledLink',
  type: 'object',
  title: 'Link',
  initialValue: {
    style: 'primary',
    align: 'left',
  },
  fields: [
    defineField({
      name: 'text',
      type: 'string',
      title: 'Text',
      validation: (Rule) => Rule.required(),
      codegen: { required: true },
    }),
    defineField({
      name: 'link',
      type: 'url',
      title: 'Link',
      validation: (Rule) => Rule.required(),
      codegen: { required: true },
    }),
    defineField({
      name: 'style',
      type: 'string',
      title: 'Style',
      options: {
        list: [
          { title: 'Primary Button', value: 'primary' },
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
          { title: 'Left', value: 'left' },
          { title: 'Center', value: 'center' },
        ],
      },
    }),
  ],
}
