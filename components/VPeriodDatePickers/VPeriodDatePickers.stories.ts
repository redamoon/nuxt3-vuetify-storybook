import type { Meta, StoryObj } from '@storybook/vue3'
import VPeriodDatePickers from './VPeriodDatePickers.vue'

type Story = StoryObj<typeof VPeriodDatePickers>;

const meta: Meta<typeof VPeriodDatePickers> = {
  title: 'Components/VPeriodDatePickers',
  component: VPeriodDatePickers,
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
    components: { VPeriodDatePickers },
    setup () {
      return { args }
    },
    template: '<VPeriodDatePickers v-bind="args" />'
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
