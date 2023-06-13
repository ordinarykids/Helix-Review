import type { Meta, StoryObj } from '@storybook/react'
import Button from '.'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  //   tags: ['autodocs'], // Uncomment if you aren't using an MDX file for docs here
}

export default meta

type Story = StoryObj<typeof Button>;

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
