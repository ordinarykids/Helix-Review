import { SchemaIcon } from '@sanity/icons'

export default {
  name: 'category',
  type: 'document',
  title: 'Category',
  icon: SchemaIcon,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Category Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'parent',
      type: 'reference',
      title: 'Parent Category',
      description: 'Optional: Choose a parent category or create a new parent category',
      to: [{ type: 'category' }],
    },
  ],
}
