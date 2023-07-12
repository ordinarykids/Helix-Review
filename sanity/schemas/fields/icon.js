import { defineType } from 'sanity'

export default defineType({
  name: 'icon',
  title: 'Icon',
  type: 'string',
  options: {
    list: [
      { title: 'Heart', value: 'heart' },
      { title: 'Helix', value: 'helix' },
      { title: 'Increasing Bar Chart', value: 'increasingBarChart' },
      { title: 'Laptop', value: 'laptop' },
      { title: 'Lightbulb', value: 'lightbulb' },
      { title: 'Line Bar Chart', value: 'lineBarChart' },
      { title: 'Magnifying Glass', value: 'magnifyingGlass' },
      { title: 'Network', value: 'network' },
      { title: 'Shield With Plus Sign', value: 'shieldPlusSign' },
    ],
  },
})
