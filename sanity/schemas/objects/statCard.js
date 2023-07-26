import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'statCard',
  type: 'object',
  title: 'Stat Card',
  fields: [
    defineField({
      title: 'Icon',
      name: 'icon',
      type: 'icon',
    }),
    defineField({
      title: 'Icon Color',
      name: 'iconColor',
      type: 'iconColor',
      hidden: ({ parent }) => !parent?.icon,
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
})
