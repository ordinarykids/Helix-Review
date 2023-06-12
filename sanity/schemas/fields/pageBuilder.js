import { defineArrayMember, defineType } from 'sanity'

export default defineType({
  name: 'pageBuilder',
  type: 'array',
  title: 'Page sections',
  description: 'Add, edit, and reorder sections',
  of: [
    defineArrayMember({ type: 'geometricCTAs' }),
  ],
})
