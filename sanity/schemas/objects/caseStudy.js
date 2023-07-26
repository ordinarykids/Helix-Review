import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'caseStudy',
  type: 'object',
  title: 'Case Study',
  fields: [
    defineField({
      name: 'sections',
      type: 'array',
      title: 'Sections',
      of: [
        defineArrayMember({
          name: 'section',
          type: 'object',
          title: 'Section',
          fields: [
            defineField({
              name: 'eyebrow',
              type: 'string',
              title: 'Eyebrow',
              codegen: { required: true },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'header',
              type: 'text',
              title: 'Header',
              rows: 3,
            }),
            defineField({
              name: 'subsections',
              type: 'array',
              title: 'Subsections',
              of: [
                defineArrayMember({
                  name: 'subsection',
                  type: 'object',
                  title: 'Subsection',
                  fields: [
                    defineField({
                      name: 'eyebrow',
                      type: 'string',
                      title: 'Eyebrow',
                    }),
                    defineField({
                      title: 'Eyebrow Color',
                      name: 'iconColor',
                      type: 'iconColor',
                      hidden: ({ parent }) => !parent?.eyebrow,
                    }),
                    defineField({
                      name: 'innerBlocks',
                      type: 'array',
                      title: 'Inner Blocks',
                      of: [
                        defineArrayMember({ type: 'caseStudyTwoUp' }),
                        defineArrayMember({ type: 'caseStudyWideCards' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
      codegen: { required: true },
      validation: (Rule) => Rule.required().max(3).error('Must have betewen 1 and 3 case study sections.'),
    }),
  ],
  preview: {
    select: {
      section0Eyebrow: 'sections.0.eyebrow',
      section1Eyebrow: 'sections.1.eyebrow',
      section2Eyebrow: 'sections.2.eyebrow',
    },
    prepare: ({
      section0Eyebrow,
      section1Eyebrow,
      section2Eyebrow,
    }) => {
      const links = [
        section0Eyebrow,
        section1Eyebrow,
        section2Eyebrow,
      ].filter(Boolean)
      const eyebrowsCombined = links.join(', ')
      return {
        title: `${eyebrowsCombined}...`,
      }
    },
  },
})
