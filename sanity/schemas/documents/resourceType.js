import { defineType, defineField } from 'sanity'
import { TagIcon } from '@sanity/icons'

export default defineType({
  name: 'resourceType',
  type: 'document',
  title: 'Type',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Type Name',
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
    defineField({
      name: 'color',
      title: 'Color',
      type: 'string',
      initialValue: '#3F4C77',
      options: {
        list: [
          { title: 'Dark Blue', value: '#3F4C77' },
          { title: 'Gold', value: '#957205' },
          { title: 'Teal', value: '#448A8B' },
          { title: 'Red Wine', value: '#92374F' },
          { title: 'Forest Green', value: '#497144' },
        ],
      },
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    }),
  ],
})
