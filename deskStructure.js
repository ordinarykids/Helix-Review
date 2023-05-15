import { createClient } from '@sanity/client'
import {
  DocumentIcon, EditIcon, SchemaIcon, TagIcon,
} from '@sanity/icons'

export const structure = (S) => {
  const client = createClient({
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET,
    useCdn: false,
    apiVersion: process.env.SANITY_STUDIO_API_VERSION,
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
      ...S.documentTypeListItems().filter((listItem) => !['blogPost', 'category', 'tag'].includes(listItem.getId())),
      S.divider(),
      S.listItem()
        .title('Post')
        .icon(DocumentIcon)
        .child(
          S.documentTypeList('blogPost')
            .title('All Posts'),
        ),
      S.listItem()
        .title('Catgories')
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
    ])
}

export default structure
