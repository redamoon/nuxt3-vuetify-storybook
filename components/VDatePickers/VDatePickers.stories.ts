import type { Meta, StoryObj } from '@storybook/vue3'
import VDatePickers from './VDatePickers.vue'

type Story = StoryObj<typeof VDatePickers>;

const meta: Meta<typeof VDatePickers> = {
  title: 'Components/VDatePickers',
  component: VDatePickers,
  tags: ['autodocs'],
  argTypes: {
    'onUpdate:modelValue': {
      action: 'modelValue'
    },
    variant: {
      control: {
        type: 'select'
      },
      options: ['underlined',
        'outlined',
        'filled',
        'solo',
        'solo-inverted',
        'solo-filled',
        'plain']
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
    hideWeekdays: false,
    multiple: false,
    isActions: true,
    border: 0,
    header: 'ヘッダー'
  }
}

export const Multiple: Story = {
  args: {
    hideHeader: false,
    multiple: true,
    isActions: true,
    border: 0
  }
}

export const Range: Story = {
  args: {
    hideHeader: false,
    multiple: 'range',
    isActions: true,
    border: 0
  }
}

export default meta
