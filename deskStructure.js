import { createClient } from '@sanity/client'
import {
  DocumentIcon, EditIcon, SchemaIcon, TagIcon,
} from '@sanity/icons'
import { sanityProjectId, sanityDataset, sanityApiVersion } from './environment'

export const structure = (S) => {
  const client = createClient({
    projectId: sanityProjectId,
    dataset: sanityDataset,
    useCdn: false,
    apiVersion: sanityApiVersion,
  })

  const getCategoryMenuItems = (id) => {
    const customEditButton = S.menuItem()
      .icon(EditIcon)
      .title('Edit Category')
      .showAsAction(true)
      .intent({
        type: 'edit',
        params: { id, type: 'category' },
      })

    const defaultItems = S.documentTypeList('category').getMenuItems()
    return [...defaultItems, customEditButton]
  }

  const subCategoryList = async (categoryId) => {
    const category = await client.getDocument(categoryId)

    return S.documentTypeList('category')
      .title(category.name)
      .filter('parent._ref == $categoryId')
      .params({ categoryId })
      .menuItems(getCategoryMenuItems(categoryId))
      .canHandleIntent(() => false)
      .initialValueTemplates([
        S.initialValueTemplateItem(
          'subCategory',
          { parentCategoryId: categoryId },
        ),
      ])
      .child(
        subCategoryList,
      )
  }

  return S.list()
    .title('Content')
    .items([
      ...S.documentTypeListItems().filter((listItem) => !['blogPost', 'category', 'tag', 'mainNavigation', 'footerNavigation'].includes(listItem.getId())),
      S.divider(),
      S.listItem()
        .title('Post')
        .icon(DocumentIcon)
        .child(
          S.documentTypeList('blogPost')
            .title('All Posts'),
        ),
      S.listItem()
        .title('Categories')
        .icon(SchemaIcon)
        .child(
          S.documentTypeList('category')
            .title('Categories')
            .filter('_type == "category" && !defined(parent)')
            .canHandleIntent(() => false)
            .child(subCategoryList),
        ),
      S.listItem()
        .title('Tags')
        .icon(TagIcon)
        .child(
          S.documentTypeList('tag')
            .title('Tags'),
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
            ]),
        ),
    ])
}

export default structure
