import { defineType } from 'sanity'

export default defineType({
  name: 'icon',
  title: 'Icon',
  type: 'string',
  options: {
    list: [
      { title: 'Helix', value: 'helix' },
      { title: 'Increasing Bar Chart', value: 'increasingBarChart' },
      { title: 'Laptop', value: 'laptop' },
      { title: 'Line Bar Chart', value: 'lineBarChart' },
      { title: 'Magnifying Glass', value: 'magnifyingGlass' },
      { title: 'Network', value: 'network' },
      { title: 'Shield With Plus Sign', value: 'shieldPlusSign' },
    ],
  },
})
