import { defineArrayMember, defineType } from 'sanity'

export default defineType({
  name: 'pageBuilder',
  type: 'array',
  title: 'Page sections',
  description: 'Add, edit, and reorder sections',
  of: [
    defineArrayMember({ type: 'pageSection' }),
    defineArrayMember({ type: 'accordion' }),
    defineArrayMember({ type: 'quote' }),
    defineArrayMember({ type: 'threeStageProcess' }),
    defineArrayMember({ type: 'hubspotForm' }),
    defineArrayMember({ type: 'geometricCTAs' }),
    defineArrayMember({ type: 'fourPointChart' }),
    defineArrayMember({ type: 'partnerLogoGrid' }),
    defineArrayMember({ type: 'caseStudy' }),
    defineArrayMember({ type: 'videoEmbed' }),
    defineArrayMember({ type: 'resourceHub' }),
    defineArrayMember({ type: 'resourceLatestContent' }),
  ],
})
