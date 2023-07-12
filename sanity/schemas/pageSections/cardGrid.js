import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'cardGrid',
  type: 'object',
  title: 'Card Grid',
  fields: [
    defineField({
      name: 'cards',
      type: 'array',
      title: 'Cards',
      of: [defineArrayMember({ type: 'iconCard' })],
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
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
