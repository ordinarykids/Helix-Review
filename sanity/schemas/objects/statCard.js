import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'statCard',
  type: 'object',
  title: 'Stat Card',
  fields: [
    defineField({
      title: 'Add Icon Or Image?',
      name: 'mediaType',
      type: 'string',
      options: {
        list: [
          { title: 'Icon', value: 'icon' },
          { title: 'Image', value: 'image' },
        ],
      },
    }),
    defineField({
      title: 'Icon',
      name: 'icon',
      type: 'icon',
      hidden: ({ parent }) => parent?.mediaType !== 'icon',
    }),
    defineField({
      title: 'Icon Color',
      name: 'iconColor',
      type: 'iconColor',
      hidden: ({ parent }) => parent?.mediaType !== 'icon',
    }),
    defineField({
      title: 'Image',
      name: 'image',
      type: 'image',
      hidden: ({ parent }) => parent?.mediaType !== 'image',
    }),
    defineField({
      title: 'Statistic',
      name: 'statistic',
      type: 'string',
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Description',
      name: 'description',
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
  ],
  preview: {
    select: {
      title: 'statistic',
    },
  },
})
