import { TagIcon } from '@sanity/icons'

export default {
  name: 'keyword',
  type: 'document',
  title: 'Keyword',
  icon: TagIcon,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
      },
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
  ],
}
