import type { Meta, StoryObj } from '@storybook/react'
import PageHero from '.'

const meta: Meta<typeof PageHero> = {
  title: 'Components/PageHero',
  component: PageHero,
  //   tags: ['autodocs'], // Uncomment if you aren't using an MDX file for docs here
}

export default meta

type Story = StoryObj<typeof PageHero>;

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
