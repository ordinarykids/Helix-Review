import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'threeStageProcess',
  type: 'object',
  title: 'Three Stage Process',
  fields: [
    defineField({
      name: 'header',
      type: 'string',
      title: 'Header',
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
              name: 'subtitle',
              type: 'string',
              title: 'Subtitle',
            }),
            defineField({
              title: 'Description',
              name: 'description',
              type: 'array',
              codegen: { required: true },
              validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.required().length(3).error('Must have 3 stages.'),
    }),
  ],
})
