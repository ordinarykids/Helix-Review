import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'threeUpCardCta',
  title: '3-up Card CTA',
  type: 'object',
  fields: [
    defineField({
      name: 'ctas',
      type: 'array',
      title: 'CTAs',
      of: [
        defineArrayMember({
          title: 'CTA',
          name: 'cta',
          type: 'reference',
          to: [{ type: 'blogPost' }],
        }),
      ],
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      cta0Title: 'ctas.0.title',
      cta1Title: 'ctas.1.title',
      cta2Title: 'ctas.2.title',
    },
    prepare: ({
      cta0Title,
      cta1Title,
      cta2Title,
    }) => {
      const links = [
        cta0Title,
        cta1Title,
        cta2Title,
      ].filter(Boolean)
      const linksCombined = links.join(', ')
      return {
        title: `${linksCombined}...`,
      }
    },
  },
})
