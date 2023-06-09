import { defineArrayMember, defineField, defineType } from 'sanity'
import geometricCTA from './geometricCTA'

export default defineType({
  name: 'geometricCTAs',
  title: 'Geometric CTAs',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'ctas',
      type: 'array',
      title: 'CTAs',
      of: [defineArrayMember(geometricCTA)],
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    }),
  ],
})
