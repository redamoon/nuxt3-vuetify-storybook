import type { Meta, StoryObj } from '@storybook/vue3'
import VRecurringDatePickers from './VRecurringDatePickers.vue'

type Story = StoryObj<typeof VRecurringDatePickers>;

const meta: Meta<typeof VRecurringDatePickers> = {
  title: 'Components/VRecurringDatePickers',
  component: VRecurringDatePickers,
  tags: ['autodocs'],
  argTypes: {
    'onUpdate:modelValue': {
      action: 'modelValue'
    }
  },
  render: args => ({
    components: { VRecurringDatePickers },
    setup () {
      return { args }
    },
    template: '<VRecurringDatePickers v-bind="args" />'
  })
}
export const Default: Story = {
  args: {
    hideHeader: false,
    multiple: false,
    isActions: true,
    border: 0
  }
}

export default meta
