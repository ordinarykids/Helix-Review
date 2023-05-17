import type { Meta, StoryObj } from '@storybook/react'
import StyledLink from '.'

const meta: Meta<typeof StyledLink> = {
  title: 'Components/StyledLink',
  component: StyledLink,
  tags: ['autodocs'], // Uncomment if you aren't using an MDX file for docs here
}

export default meta

type Story = StoryObj<typeof StyledLink>;

export const Default: Story = {
  args: {
    text: 'Hello World!',
  },
}

export const Foo: Story = {
  args: {
    text: 'Hello World, different variation!',
  },
}
