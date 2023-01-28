import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
// import schemaTypes from './schemas/schema'

import product from '/schemas/product'
import banner from '/schemas//banner'

export default defineConfig({
  name: 'default',
  title: 'ecommerce',

  projectId: 'ymkip8ua',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: [product, banner],
  },
})
