import type { Meta, StoryObj } from '@storybook/vue3'
import VTabs from './VTabs.vue'

type Story = StoryObj<typeof VTabs>;

const meta: Meta<typeof VTabs> = {
  title: 'Features/VTabs',
  component: VTabs,
  tags: ['autodocs'],
  argTypes: {
    transition: {
      control: {
        type: 'select'
      },
      options: ['none', 'slide-x-reverse-transition', 'slide-x-transition', 'slide-y-reverse-transition', 'slide-y-transition']
    },
    reverseTransition: {
      control: {
        type: 'select'
      },
      options: ['none', 'slide-x-reverse-transition', 'slide-x-transition', 'slide-y-reverse-transition', 'slide-y-transition']
    }
  },
  render: args => ({
    components: { VTabs },
    setup () {
      return { args }
    },
    template: '<VTabs v-bind="args" />'
  })
}
export const Default: Story = {
  args: {}
}

export const DateTime: Story = {}

export default meta
