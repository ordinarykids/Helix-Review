import { defineField } from 'sanity'

export default {
  name: 'styledLink',
  type: 'object',
  title: 'Styled Link',
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
  ],
}
