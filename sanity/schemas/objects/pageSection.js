import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'pageSection',
  type: 'object',
  title: 'Page Section',
  initialValue: {
    bgColor: 'gray',
    bgImage: 'none',
  },
  fields: [
    defineField({
      title: 'Section Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Intro Text',
      name: 'text',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
        }),
        defineArrayMember({
          type: 'styledLink',
        }),
      ],
    }),
    defineField({
      title: 'Background Color',
      name: 'bgColor',
      type: 'string',
      options: {
        list: [
          { title: 'Gray', value: 'gray' },
          { title: 'White', value: 'white' },
          { title: 'Dark Blue', value: 'darkBlue' },
        ],
      },
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Background Image',
      name: 'bgImage',
      type: 'string',
      options: {
        list: [
          { title: 'None', value: 'none' },
          { title: 'Gray Shapes', value: 'grayShapes' },
        ],
      },
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'innerBlocks',
      type: 'array',
      title: 'Inner Blocks',
      of: [
        defineArrayMember({ type: 'cardGrid' }),
        defineArrayMember({ type: 'twoUp' }),
        defineArrayMember({ type: 'richText' }),
        defineArrayMember({ type: 'threeUpCardCta' }),
        defineArrayMember({ type: 'threeUpIconCard' }),
        defineArrayMember({ type: 'videoEmbed' }),
        defineArrayMember({ type: 'wideCards' }),
      ],
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    }),
  ],
})
