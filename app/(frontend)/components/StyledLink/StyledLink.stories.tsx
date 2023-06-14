import type { Decorator, Meta, StoryObj } from '@storybook/react'
import StyledLink from '.'

const centered: Decorator = (Story) => (
  <div style={{ textAlign: 'center' }}>
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

export const Default: Story = {
  args: {
    text: 'Contact Us',
    link: 'https://aleph.dev/fun',
  },
}

export const Centered: Story = {
  args: {
    text: 'Learn More',
    link: 'https://aleph.dev/fun',
    align: 'center',
  },
}
Centered.decorators = [centered]
