import type { Meta, StoryObj } from '@storybook/react'
import heroFPOImage from '../../../../stories/assets/HeroFPO.svg'
import PageHero from '.'

const meta: Meta<typeof PageHero> = {
  title: 'Components/PageHero',
  component: PageHero,
  tags: ['autodocs'], // Uncomment if you aren't using an MDX file for docs here
}

export default meta

type Story = StoryObj<typeof PageHero>;

export const HomePage: Story = {
  args: {
    pageHero: {
      header: 'Weaving Genomics into the Fabric of Healthcare',
      subheader: {
        children: [
          {
            _key: 'c5080bab2071',
            _type: 'span',
            marks: [],
            text: 'Helix transforms health organizations to leverage the power of genomics across their enterprise; creating strategic value and fueling future growth.',
          },
        ],
        _type: 'block',
        markDefs: [],
        style: 'normal',
        _key: 'c5080bab2071',
      },
      image: {
        src: heroFPOImage,
        width: 434,
        height: 427,
        alt: 'Hero FPO image',
      },
      button: {
        text: 'Contact Us',
        link: 'https://helix.com',
        linkStyle: 'button',
        size: 'large',
        align: 'left',
        theme: 'dark',
      },
    },
  },
}
