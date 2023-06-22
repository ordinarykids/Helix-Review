export default {
  name: 'pageSection',
  type: 'object',
  title: 'Page Section',
  fields: [
    {
      title: 'Section Title',
      name: 'title',
      type: 'string',
    },
    {
      name: 'innerBlocks',
      type: 'array',
      title: 'Inner Blocks',
      of: [
        { type: 'cardGrid' },
        { type: 'videoEmbed' },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
}
