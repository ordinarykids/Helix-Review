import type { Meta, StoryObj } from '@storybook/react'
import StyledLink from '.'

const centered = (Story: any) => (
  <div style={{ marginTop: '2px', textAlign: 'center' }}>
    <Story />
  </div>
)

const meta: Meta<typeof StyledLink> = {
  title: 'Components/StyledLink',
  component: StyledLink,
  tags: ['autodocs'], // Uncomment if you aren't using an MDX file for docs here
}

export default meta

type Story = StoryObj<typeof StyledLink>;

export const Primary: Story = {
  args: {
    text: 'Contact Us',
    link: 'https://aleph.dev/fun',
    style: 'primary',
    align: 'center',
  },
}
Primary.decorators = [centered]

export const Secondary: Story = {
  args: {
    text: 'Learn More',
    link: 'https://aleph.dev/fun',
    style: 'secondary',
    align: 'center',
  },
}

Secondary.decorators = [centered]

export const Carat: Story = {
  args: {
    text: 'Learn More',
    link: 'https://aleph.dev/fun',
    style: 'carat',
    align: 'left',
  },
}
