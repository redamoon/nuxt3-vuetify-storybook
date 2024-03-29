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
    },
    'onUpdate:modelValue': {
      action: 'modelValue'
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
    isActions: true,
    border: false
  }
}

export default meta
