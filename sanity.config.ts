import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { structure } from './deskStructure'
import { schemaTypes } from './sanity/schemas'
import { sanityDataset, sanityProjectId } from './environment'

export default defineConfig({
  name: 'default',
  title: 'helix-dot-com-sanity',

  basePath: '/studio',

  projectId: sanityProjectId || 'g5irbagy',
  dataset: sanityDataset || 'staging',

  plugins: [deskTool({ structure }), visionTool()],

  schema: {
    types: schemaTypes,
    templates: (prev) => [
      ...prev,
      {
        id: 'subCategory',
        title: 'Sub-category',
        schemaType: 'category',
        parameters: [
          {
            name: 'parentCategoryId',
            title: 'Parent Category ID',
            type: 'string',
          },
        ],
        value: (parameters: ({ parentCategoryId: string})) => ({
          parent: {
            _type: 'reference',
            _ref: parameters.parentCategoryId,
          },
        }),
      },
    ],
  },
})
