import type { Meta, StoryObj } from '@storybook/vue3'
import InputDateTimePicker from './InputDateTimePicker.vue'

type Story = StoryObj<typeof InputDateTimePicker>;

const meta: Meta<typeof InputDateTimePicker> = {
  title: 'Features/InputDateTimePicker',
  component: InputDateTimePicker,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: {
        type: 'text'
      }
    }
  },
  render: args => ({
    components: { InputDateTimePicker },
    setup () {
      return { args }
    },
    template: '<InputDateTimePicker v-bind="args" />'
  })
}
export const Default: Story = {
  args: {}
}

export const DateTime: Story = {
  args: {
    startDate: '2024-03-05',
    startTime: '00:02',
    endDate: '2024-03-05',
    endTime: '00:00'
  }
}

export default meta
