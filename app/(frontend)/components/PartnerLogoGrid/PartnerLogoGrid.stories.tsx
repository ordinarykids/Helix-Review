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
    header: 'Some of Our Partners',
    subheader: 'Driving collaboration and partnership across the industry:',
    logos: [
      {
        image: {
          url: 'https://cdn.sanity.io/images/g5irbagy/staging/e97e0ebbb51c68f7a03433b85fba83c021d12482-748x656.png',
          altText: '',
          title: '',
          height: 656,
          width: 748,
          aspectRatio: 1.1402439024390243,
          blurHash: 'eoPi@mo#t7xu_4yEs+RjWXs.-=M|t7t7Mxn#WCofV@Rjx^t6RjR*Ri',
        },
        external: 'foo',
      },
      {
        image: {
          url: 'https://cdn.sanity.io/images/g5irbagy/staging/e97e0ebbb51c68f7a03433b85fba83c021d12482-748x656.png',
          altText: '',
          title: '',
          height: 656,
          width: 748,
          aspectRatio: 1.1402439024390243,
          blurHash: 'eoPi@mo#t7xu_4yEs+RjWXs.-=M|t7t7Mxn#WCofV@Rjx^t6RjR*Ri',
        },
        fileUrl: '#',
      },
    ],
  },
}
