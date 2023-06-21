import type { Meta, StoryObj } from '@storybook/react'
import PartnerLogoGrid from '.'

const meta: Meta<typeof PartnerLogoGrid> = {
  title: 'Components/PartnerLogoGrid',
  component: PartnerLogoGrid,
  tags: ['autodocs'], // Uncomment if you aren't using an MDX file for docs here
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<typeof PartnerLogoGrid>;

export const Default: Story = {
  args: {
    header: 'Hello World!',
    subheader: 'what',
  },
}
