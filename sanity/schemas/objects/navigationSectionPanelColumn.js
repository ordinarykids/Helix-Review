import { defineField, defineArrayMember } from 'sanity'
import navigationLinkGroup from './navigationLinkGroup'

export default defineField({
  name: 'navigationSectionPanelColumn',
  title: 'Navigation Section Panel',
  type: 'object',
  fields: [
    {
      name: 'navigationLinkGroups',
      type: 'array',
      title: 'Link Groups',
      of: [defineArrayMember(navigationLinkGroup)],
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      navigationLinkGroup0Title: 'navigationLinkGroups.0.title',
      navigationLinkGroup1Title: 'navigationLinkGroups.1.title',
      navigationLinkGroup0NavigationLink0Title: 'navigationLinkGroups.0.navigationLinks.0.title',
      navigationLinkGroup0NavigationLink1Title: 'navigationLinkGroups.0.navigationLinks.1.title',
      navigationLinkGroup0NavigationLink2Title: 'navigationLinkGroups.0.navigationLinks.2.title',
      navigationLinkGroup0NavigationLink3Title: 'navigationLinkGroups.0.navigationLinks.3.title',
      navigationLinkGroup0NavigationLink4Title: 'navigationLinkGroups.0.navigationLinks.4.title',
      navigationLinkGroup1NavigationLink0Title: 'navigationLinkGroups.1.navigationLinks.0.title',
      navigationLinkGroup1NavigationLink1Title: 'navigationLinkGroups.1.navigationLinks.1.title',
      navigationLinkGroup1NavigationLink2Title: 'navigationLinkGroups.1.navigationLinks.2.title',
    },
    prepare: ({
      navigationLinkGroup0Title,
      navigationLinkGroup1Title,
      navigationLinkGroup0NavigationLink0Title,
      navigationLinkGroup0NavigationLink1Title,
      navigationLinkGroup0NavigationLink2Title,
      navigationLinkGroup0NavigationLink3Title,
      navigationLinkGroup0NavigationLink4Title,
      navigationLinkGroup1NavigationLink0Title,
      navigationLinkGroup1NavigationLink1Title,
      navigationLinkGroup1NavigationLink2Title,
    }) => {
      const titles = [navigationLinkGroup0Title, navigationLinkGroup1Title].filter(Boolean)
      const titlesCombined = titles.length > 0 ? titles.join(', ') : null
      const links = [
        navigationLinkGroup0NavigationLink0Title,
        navigationLinkGroup0NavigationLink1Title,
        navigationLinkGroup0NavigationLink2Title,
        navigationLinkGroup0NavigationLink3Title,
        navigationLinkGroup0NavigationLink4Title,
        navigationLinkGroup1NavigationLink0Title,
        navigationLinkGroup1NavigationLink1Title,
        navigationLinkGroup1NavigationLink2Title,
      ].filter(Boolean)
      const linksCombined = links.join(', ')
      return {
        title: titlesCombined ? `${titlesCombined}...` : `${linksCombined}...`,
      }
    },
  },
})
