import type { Meta, StoryObj } from '@storybook/vue3'
import VDatePickers from './VDatePickers.vue'

type Story = StoryObj<typeof VDatePickers>;

const meta: Meta<typeof VDatePickers> = {
  title: 'Components/VDatePickers',
  component: VDatePickers,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: {
        type: 'text'
      }
    }
  },
  render: args => ({
    components: { VDatePickers },
    setup () {
      return { args }
    },
    template: '<VDatePickers v-bind="args" />'
  })
}
export const Default: Story = {
  args: {
    hideHeader: false,
    multiple: false,
    isActions: true
  }
}

export default meta
