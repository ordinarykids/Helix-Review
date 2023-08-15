import { defineType, defineField } from 'sanity'
import { TagIcon } from '@sanity/icons'

export default defineType({
  name: 'category',
  type: 'document',
  title: 'Category',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Category Name',
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
      },
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'descriptiveName',
      type: 'string',
      title: 'Descriptive Name',
      description: 'Optional override of "Name" field to be used in places like Latest Content section headers (e.g., "Recent Published Research" instead of "Recent Research" for the "Research" type.',
    }),
  ],
})
