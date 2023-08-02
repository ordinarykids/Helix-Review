import { TagIcon } from '@sanity/icons'

export default {
  name: 'resourceType',
  type: 'document',
  title: 'Type',
  icon: TagIcon,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Type Name',
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
