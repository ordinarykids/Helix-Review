import type { Meta, StoryObj } from '@storybook/react'
import TwoUp from '.'

const meta: Meta<typeof TwoUp> = {
  title: 'Components/TwoUp',
  component: TwoUp,
}

export default meta

type Story = StoryObj<typeof TwoUp>;

export const Docs: Story = {
  args: {
    image: {
      width: 501,
      aspectRatio: 1.2525,
      blurHash: 'VHNR]}od08~59y0RE69y$}-R08I?R,j@$#^exX=[WWxX',
      url: 'https://cdn.sanity.io/images/g5irbagy/staging/e4b7ab86838e65cb8cbf23bb5c469d2bfb3787de-501x400.svg',
      altText: 'Yellow triangles',
      title: null,
      height: 400,
    },
    text: [
      {
        children: [
          {
            _key: '7d3f3389010e0',
            _type: 'span',
            marks: [],
            text: 'Stratify Healthcare Risks',
          },
        ],
        _type: 'block',
        style: 'h3',
        _key: '94775eb6ac3c',
        markDefs: [],
      },
      {
        markDefs: [],
        children: [
          {
            _key: '0e96ad1c99580',
            _type: 'span',
            marks: [],
            text: 'Being able to properly stratify the major healthcare risks that threaten communities and individuals is critical in the pursuit of providing more targeted and efficient care. But providers only see a fraction of a patients’ genetic risk with current care models, and are severely limited in the scale at which they can do it.',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '1dfac12335f4',
      },
      {
        style: 'normal',
        _key: '748e916c0926',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: '',
            _key: '44c6291076a6',
          },
        ],
        _type: 'block',
      },
      {
        link: 'https://helix.com',
        text: 'Styled link',
        _key: 'c36b34470341',
        align: 'left',
        _type: 'styledLink',
      },
    ],
    imageAlignment: 'left',
  },
}
