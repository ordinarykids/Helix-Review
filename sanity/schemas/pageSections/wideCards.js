import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'wideCards',
  title: 'Wide Cards',
  type: 'object',
  fields: [
    defineField({
      name: 'cards',
      type: 'array',
      title: 'Cards',
      of: [
        defineArrayMember({
          name: 'card',
          type: 'object',
          title: 'Card',
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
            }),
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
          ],
        }),
      ],
      codegen: { required: true },
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      card0Header: 'cards.0.header',
      card1Header: 'cards.1.header',
      card2Header: 'cards.2.header',
    },
    prepare: ({
      card0Header,
      card1Header,
      card2Header,
    }) => {
      const links = [
        card0Header,
        card1Header,
        card2Header,
      ].filter(Boolean)
      const headersCombined = links.join(', ')
      return {
        title: `${headersCombined}...`,
      }
    },
  },
})
