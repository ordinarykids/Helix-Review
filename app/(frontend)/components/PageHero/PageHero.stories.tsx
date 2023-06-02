import type { Meta, StoryObj } from '@storybook/react'
import heroFPOImage from '../../../../stories/assets/HeroFPO.svg'
import PageHero from '.'

const meta: Meta<typeof PageHero> = {
  title: 'Components/PageHero',
  component: PageHero,
  //   tags: ['autodocs'], // Uncomment if you aren't using an MDX file for docs here
}

export default meta

type Story = StoryObj<typeof PageHero>;

export const HomePage: Story = {
  args: {
    header: 'Weaving Genomics into the Fabric of Healthcare',
    subheader: 'Helix transforms health organizations to leverage the power of genomics across their enterprise; creating strategic value and fueling future growth.',
    src: heroFPOImage,
    width: 434,
    height: 427,
    alt: 'Hero FPO image',
    buttonText: 'Contact Us',
    buttonLink: 'https://helix.com',
  },
}
