import type { Meta, StoryObj } from '@storybook/react'
import CardWithImage from '.'
import healthServicesFile from '../../../../stories/assets/HealthSystems.png'
import lifeSciencesFile from '../../../../stories/assets/LifeSciences.png'
import publicHealthFile from '../../../../stories/assets/PublicHealth.png'

const containerStyle = { // move to global?
  display: 'grid',
  maxWidth: '1174px',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: '96px',
  paddingRight: '96px',
  columnGap: '24px',
  gridTemplateColumns: 'repeat(12, 1fr)',
}
const wrapStyle = {
  border: '1px dashed magenta',
}

const meta: Meta<typeof CardWithImage> = {
  title: 'Components/CardWithImage',
  component: CardWithImage,
  //   tags: ['autodocs'], // Uncomment if you aren't using an MDX file for docs here
  decorators: [
    (Story) => (
      <div style={wrapStyle}>
        <Story />
      </div>
    ),
    (Story) => (
      <div style={containerStyle}>
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof CardWithImage>;

const imageWidth = 374
const imageHeight = 328

export const HealthSystemsCard: Story = {
  args: {
    title: 'Health Systems',
    width: imageWidth,
    height: imageHeight,
    src: healthServicesFile,
    alt: 'Health systems alt',
  },
}

export const LifeSciencesCard: Story = {
  args: {
    title: 'Life Sciences',
    width: imageWidth,
    height: imageHeight,
    src: lifeSciencesFile,
    alt: 'Life sciences alt',
  },
}

export const PublicHealthCard: Story = {
  args: {
    title: 'Public Health',
    width: imageWidth,
    height: imageHeight,
    src: publicHealthFile,
    alt: 'Public health alt',
  },
}
