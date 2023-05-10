export default {
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
    {
      name: 'name',
      type: 'string',
      title: 'Title',
      group: 'mainContent',
    },
    {
      name: 'subheader',
      type: 'array',
      title: 'Subheader',
      group: 'mainContent',
      of: [
        {
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
        },
      ],
      hidden: ({ document }) => !document?.showHeroSubheader,
    },
    {
      name: 'showHeroSubheader',
      type: 'boolean',
      title: 'Edit Hero Subheader field',
      initialValue: false,
      group: 'mainContent',
    },
    {
      name: 'featuredImage',
      type: 'featuredImage',
      title: 'Featured Image',
      group: 'mainContent',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      group: 'mainContent',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'seo',
      type: 'seoFields',
      title: 'SEO Settings',
      group: 'pageSettings',
    },
    {
      name: 'docSlug',
      type: 'slug',
      title: 'Slug',
      group: 'pageSettings',
      options: {
        source: 'title',
        maxLength: 200,
      },
    },
  ],
}
