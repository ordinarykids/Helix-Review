import { defineField } from 'sanity'

export default {
  name: 'styledLink',
  type: 'object',
  title: 'Link',
  initialValue: {
    linkStyle: 'button',
    theme: 'dark',
    size: 'large',
    align: 'left',
  },
  fieldsets: [
    { name: 'linkSettings', title: 'Settings' },
  ],
  fields: [
    defineField({
      name: 'text',
      type: 'string',
      title: 'Text',
      validation: (Rule) => Rule.required(),
      codegen: { required: true },
    }),
    defineField({
      name: 'link',
      type: 'url',
      title: 'Link',
      validation: (Rule) => Rule.required(),
      codegen: { required: true },
    }),
    defineField({
      name: 'linkStyle',
      type: 'string',
      title: 'Style',
      fieldset: 'linkSettings',
      options: {
        list: [
          { title: 'Button', value: 'button' },
          { title: 'Carat', value: 'carat' },
        ],
      },
    }),
    defineField({
      name: 'theme',
      type: 'string',
      title: 'Theme',
      fieldset: 'linkSettings',
      options: {
        list: [
          { title: 'Dark', value: 'dark' },
          { title: 'Light', value: 'light' },
        ],
      },
      hidden: ({ parent }) => parent?.linkStyle === 'carat',
    }),
    defineField({
      name: 'size',
      type: 'string',
      title: 'Size',
      fieldset: 'linkSettings',
      options: {
        list: [
          { title: 'Large', value: 'large' },
          { title: 'Small', value: 'small' },
        ],
      },
      hidden: ({ parent }) => parent?.linkStyle === 'carat',
    }),
    defineField({
      name: 'align',
      type: 'string',
      title: 'Align',
      fieldset: 'linkSettings',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Center', value: 'center' },
        ],
      },
      hidden: ({ parent }) => parent?.size === 'small',
    }),
  ],
}
