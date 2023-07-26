import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'caseStudyWideCards',
  type: 'object',
  title: 'Wide Cards',
  fields: [
    defineField({
      name: 'header',
      type: 'string',
      title: 'Header',
    }),
    defineField({
      title: 'Icon Color',
      name: 'iconColor',
      type: 'iconColor',
    }),
    defineField({
      name: 'stages',
      type: 'array',
      title: 'Stages',
      of: [
        defineArrayMember({
          name: 'stage',
          type: 'object',
          title: 'Stage',
          fields: [
            defineField({
              title: 'Icon',
              name: 'icon',
              type: 'icon',
            }),
            defineField({
              name: 'title',
              type: 'string',
              title: 'Title',
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
                  lists: [],
                }),
              ],
            }),
          ],
        }),
      ],
      codegen: { required: true },
      validation: (Rule) => Rule.required().min(2).max(5).error('Must have between 2 and 5 cards.'),
    }),
  ],
})
