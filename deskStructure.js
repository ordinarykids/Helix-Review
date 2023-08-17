import { DocumentIcon, TagIcon } from '@sanity/icons'

export const structure = (S) => (
  S.list()
    .title('Content')
    .items([
      ...S.documentTypeListItems().filter((listItem) => !['resource', 'category', 'keyword', 'resourceType', 'author', 'footerContent', 'footerNavigation', 'mainNavigation'].includes(listItem.getId())),
      S.divider(),
      S.listItem()
        .title('Resources')
        .icon(DocumentIcon)
        .child(
          S.documentTypeList('resource')
            .title('All Resources'),
        ),
      S.listItem()
        .title('Types')
        .icon(TagIcon)
        .child(
          S.documentTypeList('resourceType')
            .title('Types'),
        ),
      S.listItem()
        .title('Categories')
        .icon(TagIcon)
        .child(
          S.documentTypeList('category')
            .title('Categories'),
        ),
      S.listItem()
        .title('Keywords')
        .icon(TagIcon)
        .child(
          S.documentTypeList('keyword')
            .title('Keywords'),
        ),
      S.listItem()
        .title('Authors')
        .icon(DocumentIcon)
        .child(
          S.documentTypeList('author')
            .title('All Authors'),
        ),
      S.divider(),
      S.listItem()
        .title('Settings')
        .child(
          S.list()
            .title('Settings Documents')
            .items([
              S.listItem()
                .title('Main Navigation')
                .child(S.document().schemaType('mainNavigation').documentId('mainNavigation')),
              S.listItem()
                .title('Footer Navigation')
                .child(S.document().schemaType('footerNavigation').documentId('footerNavigation')),
              S.listItem()
                .title('Footer Content')
                .child(S.document().schemaType('footerContent').documentId('footerContent')),
            ]),
        ),
    ])
)

export default structure
