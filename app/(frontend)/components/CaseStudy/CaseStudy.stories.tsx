import type { Meta, StoryObj } from '@storybook/react'
import CaseStudy from '.'

const meta: Meta<typeof CaseStudy> = {
  title: 'Components/CaseStudy',
  component: CaseStudy,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<typeof CaseStudy>;

export const Docs: Story = {
  args: {
    sections: [
      {
        _key: '767603757de6',
        eyebrow: 'The Challenge',
        header: 'Rapidly Scaling a Genomic Research Initiative with Results that can be Integrated into Clinical Care for a Large Population in Nevada.',
      },
      {
        _key: '767603757de7',
        eyebrow: 'The Solution',
        header: 'Combining Renown IHI’s Expertise in Healthcare and Research with Helix’s End-to-End Population Health Solution.',
      },
      {
        _key: '767603757de8',
        eyebrow: 'The Results',
        header: 'In Less than One Year, Renown IHI has Assembled One of the Largest Genomic and Health Data Sets in the World and Changed the Standard of Care in their Community.',
      },
    ],
  },
}
