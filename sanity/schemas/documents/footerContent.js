import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'footerContent',
  type: 'document',
  title: 'Footer Content',
  fields: [
    defineField({
      name: 'tagline',
      type: 'string',
      title: 'Tagline',
    }),
    defineField({
      name: 'twitterLink',
      type: 'string',
      title: 'Twitter Link',
    }),
    defineField({
      name: 'linkedInLink',
      type: 'string',
      title: 'LinkedIn Link',
    }),
    defineField({
      name: 'contactInfo',
      type: 'text',
      title: 'Contact Information',
      rows: 4,
    }),
    defineField({
      name: 'copyrightStartYear',
      type: 'string',
      title: 'Copyright Start Year',
    }),
    defineField({
      name: 'copyrightCompany',
      type: 'string',
      title: 'Copyright Company',
    }),
    defineField({
      name: 'copyrightDescription',
      type: 'text',
      title: 'Copyright Description',
      rows: 4,
    }),
    defineField({
      name: 'legalLinks',
      type: 'array',
      title: 'Legal Links',
      of: [defineArrayMember({ type: 'navigationLink' })],
    }),
    defineField({
      name: 'certifications',
      type: 'array',
      title: 'Certifications',
      of: [defineArrayMember({ type: 'string' })],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Footer Content',
      }
    },
  },
})
