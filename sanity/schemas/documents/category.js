import { TagIcon } from '@sanity/icons'

export default {
  name: 'category',
  type: 'document',
  title: 'Category',
  icon: TagIcon,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Category Name',
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
