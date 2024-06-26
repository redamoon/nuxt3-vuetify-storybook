import type { Meta, StoryObj } from '@storybook/vue3'
import VTabsWindowOutside from './VTabsWindowOutside.vue'

type Story = StoryObj<typeof VTabsWindowOutside>;

const meta: Meta<typeof VTabsWindowOutside> = {
  title: 'Features/VTabsWindowOutside',
  component: VTabsWindowOutside,
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
    components: { VTabsWindowOutside },
    setup () {
      return { args }
    },
    template: '<VTabsWindowOutside v-bind="args" />'
  })
}
export const Default: Story = {
  args: {}
}

export default meta
