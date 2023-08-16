import { defineType, defineField, defineArrayMember } from 'sanity'

const resource = defineType({
  name: 'resource',
  type: 'document',
  title: 'Resource',
  initialValue: () => ({
    publishedDate: (new Date().toISOString()),
  }),
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
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      group: 'mainContent',
      options: {
        source: 'title',
        maxLength: 200,
      },
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    }),
    defineArrayMember({
      title: 'Type',
      name: 'type',
      type: 'reference',
      to: [{ type: 'resourceType' }],
      group: 'mainContent',
      options: {
        disableNew: true,
      },
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      type: 'array',
      title: 'Subtitle',
      group: 'mainContent',
      of: [
        defineArrayMember({
          type: 'block',
          lists: [],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Underline', value: 'underline' },
            ],
            annotations: [],
          },
          styles: [],
        }),
      ],
    }),
    defineArrayMember({
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: [{ type: 'author' }],
      group: 'mainContent',
    }),
    defineField({
      name: 'publication',
      type: 'string',
      title: 'Publication',
      group: 'mainContent',
    }),
    defineField({
      name: 'publicationSource',
      type: 'url',
      title: 'Publication Source',
      group: 'mainContent',
    }),
    defineField({
      name: 'publishedDate',
      type: 'datetime',
      title: 'Published Date',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
      },
      group: 'mainContent',
    }),
    defineField({
      name: 'downloadableAsset',
      type: 'file',
      title: 'Downloadable Asset',
      group: 'mainContent',
    }),
    defineField({
      name: 'externalUrl',
      type: 'url',
      title: 'External URL',
      group: 'mainContent',
    }),
    defineField({
      name: 'featuredImage',
      type: 'featuredImage',
      title: 'Featured Image',
      group: 'mainContent',
    }),
    defineField({
      name: 'gridThumbnail',
      type: 'image',
      title: 'Grid Thumbnail',
      group: 'mainContent',
    }),
    defineField({
      name: 'featuredVideo',
      type: 'string',
      title: 'Featured Video',
      group: 'mainContent',
    }),
    defineField({
      name: 'featuredAudio',
      type: 'url',
      title: 'Featured Audio',
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
        defineArrayMember({
          type: 'styledLink',
        }),
      ],
    }),
    defineField({
      name: 'categories',
      type: 'array',
      title: 'Categories',
      group: 'mainContent',
      of: [
        defineArrayMember({
          name: 'category',
          type: 'reference',
          title: 'Category',
          weak: true,
          to: [{ type: 'category' }],
          options: {
            disableNew: true,
            filter: ({ document }) => {
              const catIds = (document.categories || []).map(({ _ref }) => _ref)
              return {
                filter: '!(@._id in $catIds)',
                params: { catIds },
              }
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      group: 'mainContent',
      of: [
        defineArrayMember({
          name: 'keyword',
          type: 'reference',
          title: 'Keyword',
          weak: true,
          to: [{ type: 'keyword' }],
          options: {
            filter: ({ document }) => {
              const keywordIds = (document.keywords || []).map(({ _ref }) => _ref)
              return {
                filter: '!(@._id in $keywordIds)',
                params: { keywordIds },
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
  ],
})

export default resource
