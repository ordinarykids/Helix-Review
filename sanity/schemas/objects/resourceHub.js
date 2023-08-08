import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'resourceHub',
  title: 'Resource Hub',
  type: 'object',
  fields: [
    defineField({
      name: 'header',
      type: 'string',
      title: 'Header',
      initialValue: 'Resource Hub',
    }),
  ],
})
