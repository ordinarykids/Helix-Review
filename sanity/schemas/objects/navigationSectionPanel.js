import { defineField, defineArrayMember } from 'sanity'
import navigationSectionPanelColumn from './navigationSectionPanelColumn'

export default defineField({
  name: 'navigationSectionPanel',
  title: 'Navigation Section Panel',
  type: 'object',
  fields: [
    {
      name: 'columns',
      type: 'array',
      title: 'Columns',
      of: [defineArrayMember(navigationSectionPanelColumn)],
      codegen: { required: true },
      validation: (Rule) => Rule.required().min(1).max(3).error('Must have 1-3 columns.'),
    },
    {
      title: 'Teaser',
      name: 'teaser',
      type: 'reference',
      to: [{ type: 'blogPost' }],
    },
  ],
})
