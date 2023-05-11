import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'
import { sanityDataset, sanityProjectId } from './environment'

export default defineConfig({
  name: 'default',
  title: 'helix-dot-com-sanity',

  basePath: '/studio',

  projectId: sanityProjectId || 'g5irbagy',
  dataset: sanityDataset || 'staging',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
