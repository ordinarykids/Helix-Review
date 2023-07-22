import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'caseStudyTwoUp',
  type: 'object',
  title: '2-Up',
  initialValue: {
    imageAlignment: 'right',
  },
  fields: [
    defineField({
      title: 'Image',
      name: 'image',
      type: 'image',
    }),
    defineField({
      title: 'Icon Card',
      name: 'iconCard',
      type: 'object',
      fields: [
        defineArrayMember({
          title: 'Rows',
          name: 'rows',
          type: 'array',
          of: [
            defineArrayMember({
              name: 'row',
              type: 'object',
              title: 'Row',
              fields: [
                defineField({
                  name: 'text',
                  type: 'string',
                  title: 'Text',
                }),
                defineField({
                  title: 'Icon',
                  name: 'icon',
                  type: 'icon',
                }),
                defineField({
                  title: 'Icon Color',
                  name: 'iconColor',
                  type: 'iconColor',
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
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
      name: 'imageAlignment',
      type: 'string',
      title: 'Image/Icon Card Alignment',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Right', value: 'right' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
})
