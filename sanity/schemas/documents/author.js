import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'author',
  type: 'document',
  title: 'Author',
  fields: [
    defineField({
      name: 'firstName',
      type: 'string',
      title: 'First Name',
    }),
    defineField({
      name: 'lastName',
      type: 'string',
      title: 'Last Name',
    }),
    defineField({
      name: 'designation',
      type: 'string',
      title: 'Designation',
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      title: 'Bio',
      name: 'bio',
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
      name: 'avatar',
      type: 'image',
      title: 'Avatar',
    }),
  ],
  preview: {
    select: {
      firstName: 'firstName',
      lastName: 'lastName',
      title: 'title',
      avatar: 'avatar',
    },
    prepare: ({
      firstName,
      lastName,
      title,
      avatar,
    }) => (
      {
        title: `${firstName} ${lastName}`,
        subtitle: title,
        media: avatar,
      }
    ),
  },
})
