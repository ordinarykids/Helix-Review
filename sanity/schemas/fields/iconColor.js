import { defineType } from 'sanity'

export default defineType({
  name: 'iconColor',
  title: 'Icon Color',
  type: 'string',
  initialValue: '#7ABC71',
  options: {
    list: [
      { title: 'Green', value: '#7ABC71' },
      { title: 'Yellow', value: '#F8BE08' },
      { title: 'Pink', value: '#F45B83' },
      { title: 'Dark Blue', value: '#3F4C77' },
    ],
  },
  codegen: { required: true },
  validation: (Rule) => Rule.required(),
})
