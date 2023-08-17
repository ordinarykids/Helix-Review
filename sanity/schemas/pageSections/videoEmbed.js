import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'videoEmbed',
  type: 'object',
  title: 'Video Embed',
  fields: [
    defineField({
      title: 'Eyebrow',
      name: 'eyebrow',
      type: 'string',
    }),
    defineField({
      title: 'Header',
      name: 'header',
      type: 'string',
    }),
    defineField({
      title: 'Video URL',
      name: 'url',
      type: 'url',
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
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
        }),
        {
          type: 'styledLink',
        },
      ],
    }),
    defineField({
      name: 'styleAsCard',
      title: 'Style as Card',
      type: 'boolean',
      initialValue: false,
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    }),
  ],
})
