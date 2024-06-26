import type { Meta, StoryObj } from '@storybook/vue3'
import VTabsWindow from './VTabsWindow.vue'

type Story = StoryObj<typeof VTabsWindow>;

const meta: Meta<typeof VTabsWindow> = {
  title: 'Features/VTabsWindow',
  component: VTabsWindow,
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
    components: { VTabsWindow },
    setup () {
      return { args }
    },
    template: '<VTabsWindow v-bind="args" />'
  })
}
export const Default: Story = {
  args: {}
}

export default meta
