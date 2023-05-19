import type { Meta, StoryObj } from '@storybook/react'
import CardWithImage from '.'

const meta: Meta<typeof CardWithImage> = {
  title: 'Components/CardWithImage',
  component: CardWithImage,
  //   tags: ['autodocs'], // Uncomment if you aren't using an MDX file for docs here
}

export default meta

type Story = StoryObj<typeof CardWithImage>;

const imageWidth = 374
const imageHeight = 328

export const HealthSystems: Story = {
  args: {
    title: 'Health Systems',
    width: imageWidth,
    height: imageHeight,
    src: '#',
    alt: 'Health systems alt',
  },
}

export const LifeSciences: Story = {
  args: {
    title: 'Life Sciences',
    width: imageWidth,
    height: imageHeight,
    src: '#',
    alt: 'Life sciences alt',
  },
}

export const PublicHealth: Story = {
  args: {
    title: 'Public Health',
    width: imageWidth,
    height: imageHeight,
    src: '#',
    alt: 'Public health alt',
  },
}
