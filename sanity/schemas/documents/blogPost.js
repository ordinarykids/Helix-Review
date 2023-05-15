import { defineType, defineField, defineArrayMember } from 'sanity'

const blogPost = defineType({
  name: 'blogPost',
  type: 'document',
  title: 'Blog Post',
  groups: [
    {
      name: 'mainContent',
      title: 'Main Content',
      default: true,
    },
    {
      name: 'pageSettings',
      title: 'SEO + Page Settings',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      group: 'mainContent',
    }),
    defineField({
      name: 'subheader',
      type: 'array',
      title: 'Subheader',
      group: 'mainContent',
      of: [
        defineArrayMember({
          type: 'block',
          lists: [],
          marks: {
            decorators: [
              {
                title: 'Strong',
                value: 'strong',
              },
              {
                title: 'Emphasis',
                value: 'em',
              },
            ],
            annotations: [],
          },
          styles: [],
        }),
      ],
      hidden: ({ document }) => !document?.showHeroSubheader,
    }),
    defineField({
      name: 'showHeroSubheader',
      type: 'boolean',
      title: 'Edit Hero Subheader field',
      initialValue: false,
      group: 'mainContent',
    }),
    defineField({
      name: 'featuredImage',
      type: 'featuredImage',
      title: 'Featured Image',
      group: 'mainContent',
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      group: 'mainContent',
      of: [
        defineArrayMember({
          type: 'block',
        }),
      ],
    }),
    defineField({
      name: 'category',
      type: 'array',
      title: 'Category',
      group: 'mainContent',
      of: [
        defineArrayMember({
          name: 'category',
          type: 'reference',
          title: 'Category',
          to: [{ type: 'category' }],
        }),
      ],
    }),
    defineField({
      name: 'tag',
      type: 'array',
      title: 'Tag',
      group: 'mainContent',
      of: [
        defineArrayMember({
          name: 'tag',
          type: 'reference',
          title: 'Tag',
          to: [{ type: 'tag' }],
          options: {
            filter: ({ document }) => {
              const tagIds = (document.tag || []).map(({ _ref }) => _ref)
              return {
                filter: '!(@._id in $tagIds)',
                params: { tagIds },
              }
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'seo',
      type: 'seoFields',
      title: 'SEO Settings',
      group: 'pageSettings',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      group: 'pageSettings',
      options: {
        source: 'title',
        maxLength: 200,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
})

export default blogPost
