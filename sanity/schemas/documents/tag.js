import { TagIcon } from '@sanity/icons'

export default {
  name: 'tag',
  type: 'document',
  title: 'Tag',
  icon: TagIcon,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Tag Name',
    },
  ],
}
