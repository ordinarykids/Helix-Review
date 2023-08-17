import type { Meta, StoryObj } from '@storybook/react'
import VideoEmbed from '.'

const meta: Meta<typeof VideoEmbed> = {
  title: 'Components/VideoEmbed',
  component: VideoEmbed,
}

export default meta

type Story = StoryObj<typeof VideoEmbed>;

const baseArgs = {
  eyebrow: 'Partner Perspectives',
  header: 'The Healthy Nevada Project With Renown IHI',
  url: 'https://helix.wistia.com/medias/ovfy3sn6fa',
  styleAsCard: false,
}

const examplePortableText = [
  {
    children: [
      {
        marks: [],
        text: 'HealthPartners has launched myGenetics, a population genomics program that will provide important health information to families across Minnesota and surrounding states.',
        _key: 'dfe2635f5220',
        _type: 'span',
      },
    ],
    _type: 'block',
    style: 'normal',
    _key: 'e4fbf440f0c2',
    markDefs: [
      { _type: 'link', _key: '719e3c7e43ca' },
      { _type: 'link', _key: '7e6183ec88de' },
    ],
  },
  {
    markDefs: [
      { _type: 'link', _key: '89e5c3c24dc3' },
      { _type: 'link', _key: 'e5f0d6cd40c8' },
    ],
    children: [
      {
        _type: 'span',
        marks: [],
        text: 'For more information about our partners, see: ',
        _key: '906e08673378',
      },
      {
        _type: 'span',
        marks: ['89e5c3c24dc3'],
        text: 'partner page',
        _key: '6794a455221f',
      },
      {
        _type: 'span',
        marks: [],
        text: ' or ',
        _key: 'af97777f77cc',
      },
      {
        _type: 'span',
        marks: ['e5f0d6cd40c8'],
        text: 'resource center',
        _key: 'eb85ab6536c1',
      },
    ],
    _type: 'block',
    style: 'normal',
    _key: '7330464eb7ba',
  },
]

export const WistiaNoText: Story = {
  args: {
    ...baseArgs,
  },
}

export const WistiaWithText: Story = {
  args: {
    ...baseArgs,
    text: examplePortableText,
  },
}

export const WistiaWithTextCard: Story = {
  args: {
    ...baseArgs,
    styleAsCard: true,
    text: examplePortableText,
  },
}
